angular 
  .module('app')
  .factory('Job', Job);

function Job ($resource) {
  
  var Job = $resource('http://localhost:3000/api/v1/jobs/:id.json', { id: '@id'}, {
    update: { method: 'PUT'},
    delete: { method: 'DELETE'}
  });

  return Job;
}