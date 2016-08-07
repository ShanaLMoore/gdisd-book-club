class Book < ActiveRecord::Base

  def self.rated_books(number)
    books = Book.all

    books.select do |book|
      (book.rating != nil) && (book.rating > number)
    end
  end
  
end
