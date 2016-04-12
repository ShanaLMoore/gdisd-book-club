angular
  .module('app')
  .controller('EditReviewController', EditReviewController);

function EditReviewController (Book, $location, $state, $stateParams, $http, $scope) {

  $scope.book = Book.get({id: $stateParams.id});
 
  $scope.editReview = function () {
    $scope.book.$update(function () {
      $location.path('books');
      form.$setPristine();
    });
  }
}