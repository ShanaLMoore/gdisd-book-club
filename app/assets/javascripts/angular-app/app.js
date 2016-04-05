angular 
  .module('readingList', ['ui.router', 'ngResource', 'templates'])
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'home.html',
        controller: 'HomeController as ctrl'
      })
      .state('home.bookclub',{
        url: 'bookclub',
        templateUrl: 'home/bookclub.html',
        controller: 'ReadingListController as ctrl'
      })
      .state('home.classes',{
        url: 'classes',
        templateUrl: 'home/classes.html',
        controller: 'ClassesControllr as ctrl'
      })
      .state('home.meetups',{
        url: 'meetups',
        templateUrl: 'home/meetups.html',
        controller: 'MeetUpsController as ctrl'
      });

      $urlRouterProvider.otherwise('/');
  });