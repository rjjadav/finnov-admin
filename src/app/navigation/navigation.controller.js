/**
 * Created by rahul j jadav on 3/8/2017.
 */
(function () {
  'use strict';

  angular.module('app.navigation')
    .controller('NavigationController', NavigationController);

  NavigationController.$inject =['$rootScope','data','api'];

  function NavigationController($rootScope, data, api){
    var nav= this;

    nav.getAllPartner = getAllPartner;
    nav.partnerList = undefined;

    console.log($rootScope.role);
    if($rootScope.role == 'lender'){
      nav.getAllPartner();
    }

    function getAllPartner(){
      data.get(api.getAllPartnerLender, null, true)
      .then(function (response) {
        console.log(response);
        if(response.data.partners){
          nav.partnerList = response.data.partners;
        }
      });
    }
  }
})();
