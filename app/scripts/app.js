/**
 * loads sub modules and wraps them up into the main module
 * this should be used for top-level module definitions only
 */
define(['angular', 'login', 'utils'], function(angular) {
  'use strict';

  return angular.module('app', ['app.login', 'app.utils', 'ngRoute']);
});
