angular 
  .module('app', ['ui.router', 'ngResource', 'templates'])
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('gdisd', {
        url: '/',
        templateUrl: 'gdisd.html',
        controller: 'HomeController as ctrl'
      })
      .state('gdisd.books',{
        url: 'books',
        templateUrl: 'bookclub/index.html',
        controller: 'BooksController as ctrl'
      })
      .state('gdisd.new', {
        url: 'new',
        templateUrl: 'bookclub/new.html',
        controller: 'NewBookController as ctrl'
      })      
      .state('gdisd.edit',{
        url: 'book/:id',
        templateUrl: 'bookclub/edit.html',
        controller: 'EditReviewController as ctrl'
      })
      .state('gdisd.jobs',{
        url: 'jobs',
        templateUrl: 'jobs/index.html',
        controller: 'JobPostingController as ctrl'
      })      
      .state('gdisd.contact',{
        url: 'contact',
        templateUrl: 'contact/index.html',
        controller: 'ContactController as ctrl'
      })
      .state('gdisd.meetups',{
        url: 'meetups',
        templateUrl: 'meetups/index.html',
        controller: 'MeetupsController as ctrl',
        resolve: {
          meetups: function(MeetupsService){
            return MeetupsService.getMeetups();
          }
        }
      });

      $urlRouterProvider.otherwise('/');
  });