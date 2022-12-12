class List < ApplicationRecord
  has_many :bookmarks, depedent: :destroy
end
