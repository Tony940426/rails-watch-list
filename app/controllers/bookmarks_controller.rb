class BookmarksController < ApplicationController
  before_action :set_list

  # GET /bookmarks/new
  def new
    @bookmark = Bookmark.new
  end

  # GET /bookmarks/1/edit
  def edit

  end

  # POST /bookmarks or /bookmarks.json
  def create
    @bookmark = Bookmark.new(bookmark_params)
    @bookmark.list = @list
    if @bookmark.save!
      redirect_to list_path(@list)
    else
      render :new
    end
  end

  # PATCH/PUT /bookmarks/1 or /bookmarks/1.json
  def update

  end

  # DELETE /bookmarks/1 or /bookmarks/1.json
  def destroy

  end



  def set_list
    @list = List.find(params[:list_id])
  end

  # Only allow a list of trusted parameters through.
  def bookmark_params
    params.require(:bookmark).permit(:comment, :movie_id)
  end
end
