/**
 * Created by rahul j jadav on 3/21/2017.
 */
(function(){
  'use strict';

  angular.module('app.main.loans')
    .controller('PartnerLoanRequestController',PartnerLoanRequestController);

  PartnerLoanRequestController.$inject = ['$scope','$mdDialog','data','api'];

  function PartnerLoanRequestController($scope, $mdDialog, data, api) {
    var plr = this;

    plr.uploadKyc = uploadKyc;
    plr.createLoanApplication = createLoanApplication;

    function uploadKyc(ev, custCode){
      console.log(custCode);
      data.get(api.getApplicantByCustCode, {custCode: custCode}, false)
        .then(function (response) {
          console.log(response);
          if(response.data.applicant){
            $mdDialog.show(
              $mdDialog.alert()
                .clickOutsideToClose(true)
                .title('Alert')
                .textContent('KYC already Uploaded')
                .ariaLabel('Alert Dialog Demo')
                .ok('Got it!')
                .targetEvent(ev)
            );
          }else{
            uploadKycDialog(ev,custCode);
          }
        })
    }

    function createLoanApplication(ev, custCode, productOffers){
      console.log(productOffers);
      // data.get(api.getBorroweByCustCode, {custCode: custCode}, false)
      data.get(api.getApplicantByCustCode, {custCode: custCode}, false)
        .then(function (response) {
          console.log(response);
          loanApplicationDialog(ev, custCode, response.data.applicant.id,productOffers);
        })
    }


    function uploadKycDialog(ev,custCode){
      $mdDialog.show({
        controller: 'KycUploadController',
        controllerAs: 'kyc',
        templateUrl: 'app/main/partner/partner-loan-request/kyc-upload/kyc-upload.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true,
        fullscreen: true, // Only for -xs, -sm breakpoints.
        locals:{
          custCode: custCode
        }
      })
        .then(function(answer) {

        }, function() {

        });
    }


    function loanApplicationDialog(ev, custCode, applicantId, productOffers){
      console.log(productOffers);
      $mdDialog.show({
        controller: 'LoanApplicationController',
        controllerAs: 'application',
        templateUrl: 'app/main/partner/partner-loan-request/loan-application/loan-application.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true,
        fullscreen: true, // Only for -xs, -sm breakpoints.
        locals:{
          custCode: custCode,
          applicantId: applicantId,
          productOffers: productOffers
        }
      })
        .then(function(answer) {

        }, function() {

        });
    }
    $scope.$on('$stateChangeSuccess', function(event, toState) {
      console.log(toState);
      plr.currentTab = toState.data.tabIndex;
    });
  }
})();
