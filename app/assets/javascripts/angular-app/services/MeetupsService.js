angular
  .module('app')
  .service('MeetupsService', MeetupsService);

var API_URL = '/api/v1/meetups';

function MeetupsService ($http) {

  this.getMeetups = function(){
    return $http.get(API_URL);
  };
}


