'use strict';

/**
 * @ngdoc overview
 * @name k4App
 * @description
 * # k4App
 *
 * Main module of the application.
 */
angular
  .module('k4App', [
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
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
       .when('/audio', {
        templateUrl: 'views/audio2.html',
        controller: 'AudioCtrl',
        controllerAs: 'audio'

      })
       .when('/json', {
        templateUrl: 'views/json.html',
        controller: 'JsonCtrl',
        controllerAs: 'json'

      })
      .otherwise({
        redirectTo: '/'
      });
  });
