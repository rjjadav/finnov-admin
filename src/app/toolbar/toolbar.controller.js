/**
 * Created by rahul j jadav on 3/8/2017.
 */
(function () {
  'use strict';

  angular.module('app.toolbar')
    .controller('ToolbarController', ToolbarController);

  ToolbarController.$inject=['$rootScope','$cookies','$state'];

  function ToolbarController($rootScope, $cookies, $state){
    var toolbar = this;

    toolbar.logout = logout;

    function logout(){
      for(var key in $cookies.getAll()){
        $cookies.remove(key);
      }
      $rootScope.name = undefined;
      $rootScope.role = undefined;
      $state.go('app.main_auth.login');
    }
  }
})();
