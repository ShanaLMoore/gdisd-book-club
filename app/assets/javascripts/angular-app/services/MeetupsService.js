angular
  .module('app')
  .service('MeetupsService', MeetupsService);

var API_URL = '/api/v1/meetups';

function MeetupsService ($http) {
  
  this.getMeetups = function(){
    return $http.get(API_URL);
  };
}


// 'https://secure.meetup.com/oauth2/authorize
//    ?client_id=qdj6ea0lpd0avubo2jcc8ha6gh
//    &response_type=token
//    &redirect_uri=http://localhost:3000'

