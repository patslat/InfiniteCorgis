class Corgi < ActiveRecord::Base
  attr_accessible :url

  paginates_per 5
end
