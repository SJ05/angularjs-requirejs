define(['./module'], function (controllers) {
    'use strict';
    controllers.service('LoginService', ['$q', function ($q) {
    	return {
    		authenticate: function() {
    			return 'Login Service';
    		}
    	};
    }]);
});