define(['./module'], function (controllers) {
    'use strict';
    controllers.controller('LoginCtrl', ['$scope', 'LoginService', function LoginCtrl($scope, LoginService) {
    	var vm = this;

    	vm.title = "Hello From Login Controller";
    	vm.test = LoginService.authenticate();
    }]);
});