define(['angular'], function(ng) {
  'use strict';
  var mod = ng.module('app.routes', ['ngRoute']);

  mod.config([
    '$routeProvider',
    function($routeProvider) {
      $routeProvider.when('/view1', {
        template: '<login></login>'
      });

      $routeProvider.when('/view2', {
        template: '<logout></logout>'
      });

      $routeProvider.otherwise({
        redirectTo: '/view1'
      });
    }
  ]);

  return mod;
});
