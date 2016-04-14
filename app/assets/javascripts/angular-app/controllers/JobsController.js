angular
  .module('app')
  .controller('JobsController', JobsController);


  function JobsController (Job, $location, $state) {
    var ctrl = this;
    ctrl.jobs = Job.query();

  ctrl.deleteJob = function(job) {
    job.$delete(function() {
      $state.go($state.current, {}, {reload: true});
    });
  };
  };