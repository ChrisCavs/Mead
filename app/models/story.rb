class Story < ApplicationRecord
  validates :title, :subtitle, :body, :author_id,
    presence: true
  validate :ensure_image

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

  has_many :comments

  has_many :claps,
    as: :clapable

  has_one_attached :image


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
  
  def time_estimate 
    word_count = self.body.split(' ').length
    minutes = word_count / 300
    if minutes < 1
      "< 1 min read"
    else
      "#{minutes} min read"
    end
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

  private

  def ensure_image
    unless self.image.attached?
      errors[:image] << "must be attached"
    end
  end
end
