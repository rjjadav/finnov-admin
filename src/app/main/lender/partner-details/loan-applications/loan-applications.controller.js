/**
 * Created by rahul j jadav on 3/22/2017.
 */
(function () {
  'use strict';

  angular.module('app.main.lender.partner-details')
    .controller('LoanApplicationsController',LoanApplicationsController);

  LoanApplicationsController.$inject = ['$stateParams','$mdDialog','data','api'];

  function LoanApplicationsController($stateParams, $mdDialog, data, api) {
    var applications = this;
    applications.getLoanApplications = getLoanApplications;
    applications.createLoans = createLoans;
    applications.checkKyc = checkKyc;

    applications.applicationsList = undefined;

    applications.getLoanApplications();
    function getLoanApplications() {
      data.get(api.getLoanApplications, {partnerId: $stateParams.partnerId}, true)
        .then(function(response){
          console.log(response);

          applications.applicationsList = response.data.loanApplications;
        })
    }

    function createLoans(application){
      var apps = [];
      apps.push(application)
      data.post(api.createLoans,{loanApplications : apps},false)
        .then(function (response) {
          if(response.data.loansCreated){
            application.status = 'active'
          }

        })
    }

    function checkKyc(ev,application){
      console.log(application);

      $mdDialog.show({
        controller: 'UpdateKYCController',
        controllerAs: 'kyc',
        templateUrl: 'app/main/lender/partner-details/update-kyc/update-kyc.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true,
        fullscreen: true,
        locals:{
          application : application,
          partnerId: $stateParams.partnerId
        }
      })
      .then(function(response){
        if(response.kycEdited){
          applications.getLoanApplications();
        }
      });
      // data.get(api.getKycDetail, {custCode: application.custCode, partnerId : $stateParams.partnerId})
      // .then(function(response){
      //   console.log(response);
      // })
      // .catch();
    }

  }
})();
