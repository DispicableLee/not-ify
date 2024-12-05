class Api::PlaylistsController < ApplicationController
  def index 
    @playlists = Playlist.all
    render :index
  end

  def show 
    @playlist = Playlist.find(params[:id])
    render :show
  end

  def create
    puts "Params: #{params.inspect}"
    debugger
    @playlist = Playlist.new(playlist_params)
    if @playlist.save
      if params[:playlist][:track_objects].present?
        params[:playlist][:track_objects].each do |track_object|
          @playlist.tracks.build(track_object.permit(:title, :url, :uploader_id))
        end
      end
      render :show
    else
      render json: @playlist.errors.full_messages, status: 422
    end
  end

  def update
    @playlist = Playlist.find(params[:id])
    if @playlist.update(playlist_params)

    end
  end

  private
  def playlist_params
    params.require(:playlist).permit(
      :title, :uploader_id, :description, :image_url,
      tracks_attributes: [:title, :url, :uploader_id],
    )
  end
end
