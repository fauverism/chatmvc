'use strict';

/**
 * @ngdoc function
 * @name ngFireChatApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngFireChatApp
 */
angular.module('ngFireChatApp')
  .controller('MainCtrl', function ($scope, $firebase) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var ref = new Firebase("https://ngfirechat.firebaseio.com/");
    $scope.messages = $firebase(ref);
    $scope.addMessage = function(e) {
      if (e.keyCode != 13) return;
      $scope.messages.$add({from: $scope.name, body: $scope.msg});
      $scope.msg = "";
    }
  });

/*
TODO:
  - presence
  - change layout
  - register
  - group
  - time
 */