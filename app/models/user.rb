# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  session_token   :string           not null
#  password_digest :string           not null
#  bio             :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord

  has_secure_password
  before_validation :ensure_session_token
  validates :username, 
    uniqueness: true, 
    length: { in: 3..30 }, 
    format: { without: URI::MailTo::EMAIL_REGEXP, message:  "can't be an email" }
  validates :email, 
    uniqueness: true, 
    length: { in: 3..255 }, 
    format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :session_token, presence: true, uniqueness: true
  validates :password, length: { in: 6..255 }, allow_nil: true



    has_many :albums,
    class_name: 'Album',
    foreign_key: :uploader_id,
    primary_key: :id,
    dependent: :destroy

    def self.find_by_credentials(credential, password)
      isEmail = false
      if credential.match(URI::MailTo::EMAIL_REGEXP)
        isEmail = true
        user = User.find_by(email: credential)
      else
        user = User.find_by(username: credential)
      end
      
      if user&.authenticate(password)
        return user
      else 
        nil
      end
    end
  
    def generate_unique_session_token
      loop do 
        token = SecureRandom.urlsafe_base64
        return token if !User.exists?(session_token: token)
      end
    end
  
    def ensure_session_token
      self.session_token ||= generate_unique_session_token
    end
    
    def reset_session_token!
      self.session_token = generate_unique_session_token
      self.save!
      self.session_token
    end




end
