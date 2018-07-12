class Following < ApplicationRecord
  validates_uniqueness_of :followed_id, scope: [:follower_id]
  validates :followed_id, :follower_id, presence: true
  validate :not_the_same

  belongs_to :followed,
    class_name: :User

  belongs_to :follower,
    class_name: :User

  def not_the_same
    if self.followed_id == self.follower_id
      self.errors[:User] << "cannot follow him/herself"
    end
  end

end