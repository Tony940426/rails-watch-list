class MoviesController < ApplicationController
  before_action :set_movie, only: %i[ show edit update ]

  # GET /movies or /movies.json
  def index
    if params[:query].present?
      sql_query = 'title ILIKE :query OR overview ILIKE :query'
      @movies = Movie.where(sql_query, query: "%#{params[:query]}%")
    else
      @movies = Movie.all
    end
  end

  # GET /movies/1 or /movies/1.json
  def show

  end

  # GET /movies/new
  def new
    @movie = Movie.new
  end

  # GET /movies/1/edit
  def edit
  end

  # POST /movies or /movies.json
  def create
    @movie = Movie.new(movie_params)
    @movie.save
  end

  # PATCH/PUT /movies/1 or /movies/1.json
  def update
    @movie.update(movie_params)
  end


  private
    # Use callbacks to share common setup or constraints between actions.
  def set_movie
    @movie = Movie.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def movie_params
    params.require(:movie).permit(:title, :overview, :rating, :poster_url)
  end
end
