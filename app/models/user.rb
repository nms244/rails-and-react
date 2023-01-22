class User < ApplicationRecord
  with_options presence: true do
    validates :name, length: { maximum: 64 }
    validates :email, uniqueness: true
  end

  has_many :tasks
end
