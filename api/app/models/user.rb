class User < ApplicationRecord
  has_many :stocks
  has_many :transactions

  has_secure_password
end
