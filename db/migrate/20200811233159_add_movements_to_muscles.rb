class AddMovementsToMuscles < ActiveRecord::Migration[6.0]
  def change
    add_reference :muscles, :movement, null: false, foreign_key: true
  end
end
