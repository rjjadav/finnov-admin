(function() {
  'use strict';

  angular
    .module('finnovAdmin')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app',{
        abstract: true,
        views: {
          // 'main@': {
          //   templateUrl: 'app/core/layout/content-only.html',
          //   controller: 'MainController',
          //   controllerAs: 'main'
          // }
          'main@': {
            templateUrl: 'app/core/layout/main-layout.html',
            controller : 'MainController',
            controllerAs: 'main'
          },
          'toolbar@app'   : {
            templateUrl: 'app/toolbar/toolbar.html',
            controller : 'ToolbarController',
            controllerAs: 'toolbar'
          },
          'navigation@app': {
            templateUrl: 'app/navigation/navigation.html',
            controller : 'NavigationController',
            controllerAs: 'nav'
          },
          // 'quickPanel@app': {
          //   templateUrl: 'app/quick-panel/quick-panel.html',
          //   controller : 'QuickPanelController',
          //   controllerAs: 'quickPanel'
          // }
        },
        resolve:{
          authorize : function (UserService) {
            return UserService.getUserType();
          }
        }
      });

    $urlRouterProvider.otherwise('/auth/login');
  }

})();
