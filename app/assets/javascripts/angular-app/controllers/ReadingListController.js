angular
  .module('app')
  .controller('ReadingListController', ReadingListController);

  function ReadingListController () {
    var ctrl = this;

    ctrl.showForm = false;

    ctrl.genres = [ 'fable', 'fantasy', 'fiction', 'folklore', 'horror', 'humor', 'legend', 'metafiction', 'mystery', 'mythology', 'non-fiction', 'poetry' ];
  }


