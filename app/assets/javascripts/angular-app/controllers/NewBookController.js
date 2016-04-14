angular
  .module('app')
  .controller('NewBookController', NewBookController);

function NewBookController (Book, $location, $scope) {

  $scope.book = new Book();

  $scope.addBook = function (book) {
    console.log(book);
    $scope.book.$save(function () {
      $location.path('books');
    });
  }
}