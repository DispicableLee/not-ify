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

  end

  private
  def playlist_params
    params.require(:playlist).permit(
      :title, :uploader_id, :description, :image_url,
      tracks_attributes: [:title, :url, :uploader_id],
    )
  end
end
