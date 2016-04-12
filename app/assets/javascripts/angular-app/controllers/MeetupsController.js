angular
  .module('app')
  .controller('MeetupsController', MeetupsController);

  function MeetupsController (meetups) {
    var ctrl = this;
    ctrl.data = meetups.data;
    ctrl.events = meetups.data.results;
  }

