# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

require 'json'
require 'open-uri'

puts 'Cleaning Database'
Movie.destroy_all

url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=e21f347015063e52941c0f886ea87a98&language=en-US&page=1'
user_serialized = URI.open(url).read
user = JSON.parse(user_serialized)
movies = user['results']

movies.each do |movie|
  title = movie['original_title']
  overview = movie['overview']
  votes =  movie['vote_average']
  poster = movie['backdrop_path']

  Movie.create(title: title, overview: overview, poster_url: "https://image.tmdb.org/t/p/w500#{poster}", rating: votes)
end

List.create!(name: "Classic")
List.create!(name: "Action")
Review.create!(content: "List could be better", rating: 2, list_id: 1)
Review.create!(content: "Why was this list created", rating: 1, list_id: 1)
Review.create!(content: "Fantastic list, great movies", rating: 5, list_id: 2)

puts 'Seeds Created'
