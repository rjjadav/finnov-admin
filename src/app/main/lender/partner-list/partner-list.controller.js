/**
 * Created by rahul j jadav on 3/9/2017.
 */
(function () {
  'use strict';

  angular.module('app.main.lender')
    .controller('ListPartnerController', ListPartnerController);

  ListPartnerController.$inject=['$mdDialog', 'data', 'api'];

  function ListPartnerController($mdDialog, data, api){
    var list = this;
    list.getAllPartner = getAllPartner;
    list.activatePartner = activatePartner;

    list.getAllPartner();
    function getAllPartner(){
      data.get(api.getAllPartner, null, true)
        .then(function (response) {
          console.log(response);
          if(response.data.partners){
            list.partnerList = response.data.partners;
          }
        })
    }

    function activatePartner(partner) {
      data.post(api.makePartnerActive, {partnerId: partner.id}, false)
      .then(function(response){
        console.log(response);
        if(response.data.active){
          partner.active = true;
        }
      })
    }

    // function loanRequest(ev, partner){
    //   $mdDialog.show({
    //     templateUrl: 'app/main/partner/loan-request/loan-request.html',
    //     controller: 'LoanRequestController',
    //     controllerAs: 'loanReq',
    //     parent: angular.element(document.body),
    //     targetEvent: ev,
    //     clickOutsideToClose:true,
    //     fullscreen: true,
    //     locals:{
    //       partner: partner
    //     }
    //   })
    //   .then(function(data){
    //     if(data.profileInfo){
    //       profile.profileInfo = data.profileInfo;
    //     }
    //   });
    // }
  }
})();
