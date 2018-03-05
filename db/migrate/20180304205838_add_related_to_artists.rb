class AddRelatedToArtists < ActiveRecord::Migration
  def change
    add_column :artists, :rel_artist1, :string
    add_column :artists, :rel_artist2, :string
    add_column :artists, :rel_artist3, :string
  end
end
