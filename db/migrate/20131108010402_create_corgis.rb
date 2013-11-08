class CreateCorgis < ActiveRecord::Migration
  def change
    create_table :corgis do |t|
      t.string :url

      t.timestamps
    end
  end
end
