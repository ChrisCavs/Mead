class Story < ApplicationRecord
  validates :title, :subtitle, :body, :image_url, :author_id,
    presence: true

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

  def time_estimate 
    word_count = self.body.split(' ')
    minutes = word_count / 300
  end
end
