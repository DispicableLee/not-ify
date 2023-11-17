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
        @album = Album.new(album_params)
        if @album.save
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
    end





    private
    def album_params
        params.require(:album).permit[:title, :uploader_id, :description]
    end
end
