class Following < ApplicationRecord
  validates_uniqueness_of :followed_id, scope: [:follower_id]
  validates :followed_id, :follower_id, presence: true

  belongs_to :followed,
    class_name: :User

  belongs_to :follower,
    class_name: :User

end