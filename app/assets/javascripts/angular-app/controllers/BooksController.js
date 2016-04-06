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
      templateUrl: 'bookclub/review-form.html',
      replace: true,
      controller: function(){
        this.book = {genres:{}};

        this.addReview = function(form){
          books.push(this.book);
          this.book = {genres:{}};
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

    ctrl.genres = [ 'fable', 'fantasy', 'fiction', 'folklore', 'horror', 'humor', 'legend', 'metafiction', 'mystery', 'mythology', 'non-fiction', 'poetry' ];

    ctrl.showForm = false;
  };


