angular
  .module('app')
  .controller('ShowBookController', ShowBookController);

function ShowBookController(Book, $state, $stateParams, $http) {

  var ctrl = this;

  ctrl.book = Book.get({ id: $stateParams.id });

}