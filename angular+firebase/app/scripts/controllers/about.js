'use strict';

/**
 * @ngdoc function
 * @name ngFireChatApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ngFireChatApp
 */
angular.module('ngFireChatApp')
  .controller('AboutCtrl', function ($scope, $firebase) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });