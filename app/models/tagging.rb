class Tagging < ApplicationRecord

  belongs_to :story,
    foreign_key: :story_id,
    class_name: :Story,
    inverse_of: :taggings
  
  belongs_to :tag,
    foreign_key: :tag_id,
    class_name: :Tag
end