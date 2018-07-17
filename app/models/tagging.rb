class Tagging < ApplicationRecord
  validates :story_id, :tag_id, presence: true

  belongs_to :story,
    foreign_key: :story_id,
    class_name: :Story
  
  belongs_to :tag,
    foreign_key: :tag_id,
    class_name: :Tag
end