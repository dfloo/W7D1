# == Schema Information
#
# Table name: todos
#
#  id    :bigint(8)        not null, primary key
#  title :string           not null
#  body  :string           not null
#  done  :boolean          default(FALSE), not null
#

class Todo < ApplicationRecord
  validates :title, :body, presence: true
  validates :done, inclusion: { in: [true, false] }
end
