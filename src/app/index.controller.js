/**
 * Created by rahul j jadav on 3/8/2017.
 */
(function(){
  'use strict';

  angular.module('finnovAdmin')
    .controller('IndexController', IndexController);

  IndexController.$inject = ['$mdSidenav'];

  function IndexController($mdSidenav){
    var vm = this;
    vm.lockLeft = true;
  }

})();
