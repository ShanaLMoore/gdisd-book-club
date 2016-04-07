angular
  .module('app')
  .controller('BooksController', BooksController)
  .directive('bookCover', function(){
    return {
      restrict: 'E',
      templateUrl: 'bookclub/book-cover.html',
      replace: true
    }
  })

  .directive('reviewForm', function(){
    return {
      restrict: 'E',
      templateUrl: 'bookclub/edit.html',
      replace: true,
      controller: function(){
        
        this.addReview = function(form){
          books.push(this.book);
          form.$setPristine();
        }
      },
      controllerAs: 'reviewFormCtrl',
      scope: {
        books: '=',
        genres: '='
      }
    }
  });


  function BooksController (Book) {
    var ctrl = this;
    ctrl.books = Book.query();
  };


