define(['./module'], function (controllers) {
    'use strict';
    controllers.service('LogoutService', ['$q', function ($q) {
    	return {
    		doLogout: function() {
    			return 'Logout Service';
    		}
    	};
    }]);
});