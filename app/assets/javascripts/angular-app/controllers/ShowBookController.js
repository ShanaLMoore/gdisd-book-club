angular
  .module('app')
  .controller('ShowBookController', ShowBookController);

function ShowBookController(Book, $location, $state, $stateParams, $http) {

  var ctrl = this;
  ctrl.showForm = false;
  ctrl.book = Book.get({ id: $stateParams.id })

  ctrl.editReview = function () {
    ctrl.book.$update(function () {
      $location.path('books');
    })
  };

}