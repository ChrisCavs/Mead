class Tag < ApplicationRecord
  validates :name, presence: true, uniqueness: true

  has_many :taggings,
    foreign_key: :tag_id,
    class_name: :Tagging

  has_many :stories,
    through: :taggings,
    source: :story
end