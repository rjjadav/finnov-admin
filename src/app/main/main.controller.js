(function() {
  'use strict';

  angular
    .module('finnovAdmin')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($rootScope, authorize) {
    console.log(authorize)
    var vm = this;
    if(authorize.status == 200){
      $rootScope.loggedIn = true;
      $rootScope.role = authorize.data.accountType;
      $rootScope.name = authorize.data.name;
    }else{
      $rootScope.loggedIn = false;
    }


  }
})();
