'use strict';

/**
 * @ngdoc function
 * @name k4App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the k4App
 */
angular.module('k4App')
  .controller('MainCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    $scope.firstName = "John";
    $scope.lastName = "Doe";
  });

