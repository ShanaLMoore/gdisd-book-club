require 'rails_helper'

describe Book do

  it 'return the books with a rating greater than 3' do
    expect(Book.rated_books(3).count).to eq(1)
  end

  it 'handles negative input correctly' do
    binding.pry
    expect(Book.rated_books(-2).count).to eq(0)
  end


end