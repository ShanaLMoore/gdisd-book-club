angular 
  .module('app', ['ui.router', 'ngResource', 'templates'])
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'home.html',
        controller: 'HomeController as ctrl'
      })
      .state('home.bookclub',{
        url: '/bookclub',
        templateUrl: 'views/bookclub.html',
        controller: 'ReadingListController as ctrl'
      })
      .state('home.classes',{
        url: '/classes',
        templateUrl: 'views/classes.html',
        controller: 'ClassesControllr as ctrl'
      })
      .state('home.meetups',{
        url: '/meetups',
        templateUrl: 'views/meetups.html',
        controller: 'MeetUpsController as ctrl'
      });

      $urlRouterProvider.otherwise('/');
  });