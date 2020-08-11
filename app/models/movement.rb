class Movement < ApplicationRecord
  belongs_to :user
  has_many :muscles
end
