class StaticPagesController < ApplicationController::Api
    def frontend_index
    render file: Rails.root.join('public', 'index.html')
  end
end
