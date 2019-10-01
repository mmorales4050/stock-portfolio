class User < ApplicationRecord
  has_many :stocks
  has_many :transactions
end
