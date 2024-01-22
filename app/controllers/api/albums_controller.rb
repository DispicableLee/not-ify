class Api::AlbumsController < ApplicationController
    def index 
        @albums = Album.all
        render :index
    end


    def show
        # debugger
        @album = Album.find(params[:id])
        render :show
    end

    def create
        puts "Params: #{params.inspect}"
        debugger
        @album = Album.new(album_params)
        debugger
        if @album.save
            if params[:album][:track_objects].present?
                params[:album][:track_objects].each do |track_object|
                    # Use build to create a new track associated with the album
                    @album.tracks.build(track_object.permit(:title, :url, :uploader_id))
                end
            end

            render :show
        else
            render json: @album.errors.full_messages, status: 422
        end
    end



    def update 
        @album = Album.find(params[:id])
        if @album.update(album_params)
            render :show
        else
            render json: @album.errors.full_messages, status: 422
        end 
    end


    def destroy
        @album = Album.find(params[:id])
        @album.destroy
        render :show
    end

    private
    def album_params
        params.require(:album).permit(
            :title, :uploader_id, :description, :image_url,
            tracks_attributes: [:title, :url, :uploader_id],
        )
    end
end
