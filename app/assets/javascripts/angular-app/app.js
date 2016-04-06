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
      .state('gdisd.book',{
        url: 'book/:id',
        templateUrl: 'bookclub/show.html',
        controller: 'ShowBookController as ctrl'
      })
      .state('gdisd.edit',{
        url: 'book/:id',
        templateUrl: 'bookclub/edit.html',
        controller: 'EditReviewController as ctrl'
      })
      .state('gdisd.classes',{
        url: 'classes',
        templateUrl: 'classes/index.html',
        controller: 'ClassesController as ctrl'
      })
      .state('gdisd.meetups',{
        url: 'meetups',
        templateUrl: 'meetups/index.html',
        controller: 'MeetupsController as ctrl'
      });

      $urlRouterProvider.otherwise('/');
  });