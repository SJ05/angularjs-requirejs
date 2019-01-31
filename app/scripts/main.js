/**
 * configure RequireJS, define the packages, the paths and the shims
 */
require.config({
  packages: ['login', 'utils'],
  paths: {
    angular: '../../node_modules/angular/angular',
    'angular-route': '../../node_modules/angular-route/angular-route',
    domReady: '../../node_modules/requirejs-domready/domReady'
  },

  /**
   * for libs that either do not support AMD out of the box, or
   * require some fine tuning to dependency mgt'
   */
  shim: {
    angular: {
      exports: 'angular'
    },
    'angular-route': {
      deps: ['angular']
    }
  },

  deps: [
    // kick start application... see bootstrap.js
    './bootstrap'
  ]
});
