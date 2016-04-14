angular
  .module('app')
  .controller('NewJobsController', NewJobsController);

function NewJobsController(Job, $location, $state) {
  // we will use $location to route back to another state
  var ctrl = this; 
  // make a new note 
  ctrl.job = new Job();
  ctrl.postJob = function() {
    console.log('hey')
    ctrl.job.$save(function() {
      $location.path('jobs');
    });
  };

};