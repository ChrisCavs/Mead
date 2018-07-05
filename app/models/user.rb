class User < ApplicationRecord
  after_initialize :ensure_session_token

  validates :username, :name, :password_digest, :bio, :image_url,
    presence: true
  validates :username, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}

  # ASSOCIATIONS

  attr_accessor :password

  def self.find_by_credentials(username, password)
    user = user.find_by(username: username)
    if user
      user.is_password?(password) ? user : null
    else
      null
    end
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end

  def reset_session_token!
    self.session_token = self.class.generate_session_token
  end

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end

  def is_password?(password)
    crypt = BCrypt::Password.new(self.password_digest)
    crypt.is_password?(password)
  end

  def password=(password)
    self.password = password
    self.password_digest = BCrypt::Password.create(password)
  end

end
