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
      }
    }
  });


  function BooksController (Book, $location, $state) {
    var ctrl = this;
    ctrl.books = Book.query();


    ctrl.deleteBook = function(book) {
      book.$delete(function() {
        $state.go($state.current, {}, {reload: true});
      });
    };
  };


