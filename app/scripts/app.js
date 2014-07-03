'use strict';

/**
 * @ngdoc overview
 * @name ngChatApp
 * @description
 * # ngChatApp
 *
 * Main module of the application.
 */
angular
  .module('ngChatApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
        .when('/chat', {
            templateUrl: 'views/chat.html',
            controller: 'ChatCtrl'
        })
      .otherwise({
        redirectTo: '/'
      });
  });
