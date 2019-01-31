define(['./module'], function (controllers) {
    'use strict';
    controllers.controller('LogoutCtrl', ['$scope', 'LogoutService', function LogoutCtrl($scope, LogoutService) {
    	var vm = this;
    	vm.title = 'Hi from Logout Ctrl';
    	vm.test = LogoutService.doLogout();
    }]);
});