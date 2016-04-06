angular
  .module('app')
  .controller('EditReviewController', EditReviewController);

function EditReviewController () {
  var ctrl = this;
  ctrl.book = Book.get({id: $stateParams});
  ctrl.editReview = function () {
    ctrl.book.$update(function () {
      $location.path('books');
  });
}
