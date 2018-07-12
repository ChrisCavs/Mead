class Comment < ApplicationRecord
  validates :body, :story_id, :author_id, presence: true

  belongs_to :author,
    class_name: :User

  belongs_to :story
end
