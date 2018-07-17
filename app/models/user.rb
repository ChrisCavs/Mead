class User < ApplicationRecord
  after_initialize :ensure_session_token

  # VALIDATIONS
  validates :email, :name, :password_digest, :bio,
    presence: true
  validates :email, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}
  validates :bio, length: {maximum: 160}

  validate :ensure_avatar

  # ASSOCIATIONS
  has_many :authored_stories,
    foreign_key: :author_id,
    class_name: :Story

  has_many :users_following,
    foreign_key: :followed_id,
    class_name: :Following
  
  has_many :user_follows,
    foreign_key: :follower_id,
    class_name: :Following

  has_many :followers,
    through: :users_following,
    source: :follower

  has_many :followed_users,
    through: :user_follows,
    source: :followed

  has_many :followed_users_stories,
    through: :followed_users,
    source: :authored_stories

  has_many :comments,
    foreign_key: :author_id,
    class_name: :Comment

  has_one_attached :avatar

  # METHODS

  def feed_ids 
    self
      .followed_users_stories
      .limit(10)
      .pluck(:id)
      .shuffle
  end

  def recent_stories
    self
      .authored_stories
      .order('stories.created_at DESC')
      .limit(3)
      .pluck(:id)
  end

  def user_since
    months = [
      'Jan', 'Feb', 'Mar',
      'Apr', 'May', 'Jun', 
      'Jul', 'Aug', 'Sep',
      'Oct', 'Nov', 'Dec'
    ]
    month = months[self.created_at.month]
    year = self.created_at.year
    "#{month} #{year}"
  end

  def num_followed_users
    self.followed_users.count
  end

  def num_followers
    self.followers.count
  end

  attr_reader :password

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    if user
      user.is_password?(password) ? user : nil
    else
      nil
    end
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end

  def reset_session_token!
    self.session_token = self.class.generate_session_token
    self.save
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end

  def is_password?(password)
    crypt = BCrypt::Password.new(self.password_digest)
    crypt.is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  private

  def ensure_avatar
    unless self.avatar.attached?
      errors[:avatar] << "must be attached"
    end
  end

end
