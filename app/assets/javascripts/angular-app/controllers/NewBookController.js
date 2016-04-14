angular
  .module('app')
  .controller('NewBookController', NewBookController);

function NewBookController (Book, $location, $scope, $http) {

  $scope.book = new Book();

  $scope.addBook = function (book) {
    console.log(book);
    $scope.book.$save(function () {
      $location.path('books');
      form.$setPristine();
    });
  }
}