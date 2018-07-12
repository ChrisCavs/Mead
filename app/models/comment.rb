class Comment < ApplicationRecord
  validates :body, :story_id, :author_id, presence: true

  belongs_to :author,
    class_name: :User

  belongs_to :story

  has_many :claps,
    as: :clapable

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
