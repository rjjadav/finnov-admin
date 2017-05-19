/**
 * Created by rahul j jadav on 3/8/2017.
 */
(function () {
  'use strict';

  angular.module('app.toolbar')
    .controller('ToolbarController', ToolbarController);

  ToolbarController.$inject=['$rootScope','$cookies','$state','data','api'];

  function ToolbarController($rootScope, $cookies, $state, data, api){
    var toolbar = this;

    toolbar.logout = logout;

    function logout(){
      data.get(api.logout, null, false)
      .then(function(response){
        for(var key in $cookies.getAll()){
          $cookies.remove(key);
        }
        $rootScope.name = undefined;
        $rootScope.role = undefined;
        $state.go('app.main_auth.login');  
      })

      
    }
  }
})();
