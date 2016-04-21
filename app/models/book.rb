class Book < ActiveRecord::Base

  def self.book(number)
    books = Book.all

    books.select do |book|
      (book.rating != nil) && (book.rating > number)
    end
  end
  
end
