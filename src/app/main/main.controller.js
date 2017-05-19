(function() {
  'use strict';

  angular
    .module('finnovAdmin')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($rootScope, $state, authorize, data, api) {
    console.log(authorize)
    var vm = this;

    vm.getAllPartners = getAllPartners;

    vm.partnerList = undefined;

    if(authorize.status == 200){
      $rootScope.loggedIn = true;
      $rootScope.role = authorize.data.accountType;
      $rootScope.name = authorize.data.name;

      if($rootScope.role == 'lender') vm.getAllPartners();
    }else{
      $rootScope.loggedIn = false;
      $state.go('app.main_auth.login');
    }


    function getAllPartners(){
      data.get(api.getAllPartnerLender, null, true)
      .then(function (response) {
        console.log(response);
        if(response.data.partners){
          vm.partnerList = response.data.partners;
        }
      });
    }


    $rootScope.$on('user_login_success', function(){
      if($rootScope.role == 'lender') vm.getAllPartners();
    });

  }
})();
