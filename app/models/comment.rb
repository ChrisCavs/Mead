class Comment < ApplicationRecord
  validates :body, :story_id, :author_id, presence: true

  belongs_to :author,
    class_name: :User

  belongs_to :story

  has_many :claps,
    as: :clapable

  
  def totalClaps
    self
      .claps
      .sum(:quantity)
  end

  def currentUserClaps(user)
    self
      .claps
      .where(user_id: user.id)
      .sum(:quantity)
  end

  def date
    months = [
      'Jan', 'Feb', 'Mar',
      'Apr', 'May', 'Jun', 
      'Jul', 'Aug', 'Sep',
      'Oct', 'Nov', 'Dec'
    ]
    month = months[self.created_at.month]
    day = self.created_at.day
    "#{month} #{day}"
  end
end
