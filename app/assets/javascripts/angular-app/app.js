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
        controller: 'BookClubController as ctrl'
      })
      .state('home.classes',{
        url: '/classes',
        templateUrl: 'views/classes.html',
        controller: 'ClassesController as ctrl'
      })
      .state('home.meetups',{
        url: '/meetups',
        templateUrl: 'views/meetups.html',
        controller: 'MeetupsController as ctrl'
      });

      $urlRouterProvider.otherwise('/');
  });