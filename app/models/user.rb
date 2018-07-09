class User < ApplicationRecord
  after_initialize :ensure_session_token

  validates :email, :name, :password_digest, :bio, :image_url,
    presence: true
  validates :email, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}
  validates :bio, length: {maximum: 160}

  # ASSOCIATIONS
  # has_many :authored_stories,
  #   foreign_key: :author_id,
  #   class_name: :Story

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

end
