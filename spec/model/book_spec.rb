require 'rails_helper'

describe Book do

  it 'return the books with a rating greater than 3' do
    expect(Book.book(3).count).to eq(1)
  end

  it 'handles negative input correctly' do
    expect(Book.book(-2).count).to eq(0)
  end


end