class Movie < ApplicationRecord

  has_many :bookmarks, depedent: :destroy
  validates :title, :overview, presence: true
end
