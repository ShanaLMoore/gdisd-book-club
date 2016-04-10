angular
  .module('app')
  .controller('MeetupsController', MeetupsController);

  function MeetupsController (meetups) {
    this.data = meetups.data;
    console.log(this.data);
  }

