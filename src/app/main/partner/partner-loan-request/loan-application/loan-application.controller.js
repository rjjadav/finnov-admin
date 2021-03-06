/**
 * Created by rahul j jadav on 3/22/2017.
 */
(function () {
  'use strict';

  angular.module('app.main.loans')
    .controller('LoanApplicationController',LoanApplicationController);

  LoanApplicationController.$inject = ['$mdDialog','toastr','data','api','custCode','applicantId','productOffers'];

  function LoanApplicationController($mdDialog, toastr,data, api, custCode, applicantId, productOffers){
    var application = this;
    application.getBorroweByCustCode = getBorroweByCustCode;
    application.createLoanApplication = createLoanApplication;

    application.loanApplication = undefined;
    application.productOffers = productOffers;
    application.close = close; 
    console.log(application.productOffers);

    application.getBorroweByCustCode();
    function getBorroweByCustCode(){
      data.get(api.getBorroweByCustCode, {custCode: custCode}, false)
        .then(function (response) {
          if(response.data.borrower){
            application.loanApplication = response.data.borrower;
            delete application.loanApplication.createdOn;
            delete application.loanApplication.loanIds;
            delete application.loanApplication.status;
            delete application.loanApplication.partnerId;
            // delete application.loanApplication.id;
          }else{
            application.loanApplication = {};
            application.loanApplication.custCode = custCode;
            application.loanApplication.applicantId = applicantId;

          }
        });
    }

    function createLoanApplication(loanApplication,productOffer){
      console.log(JSON.parse(productOffer));
      loanApplication.dateOfAcceptance = new Date(loanApplication.dateOfAcceptance.split('-')[2],loanApplication.dateOfAcceptance.split('-')[1],loanApplication.dateOfAcceptance.split('-')[0]);
      loanApplication.productOffer = JSON.parse(productOffer);
      delete loanApplication.id;
      console.log(loanApplication.dateOfAcceptance);
      data.post(api.createLoanApplication, loanApplication, false)
        .then(function (response) {
          console.log(response);
          if(response.data.loanApplication){
            toastr.success('Loan Created', 'success');
            $mdDialog.hide();
          }else{
            toastr.error('Fail to create Loan application', 'Failure');
          }
        });
    }

    function close(){
      $mdDialog.cancel();
    }
  }
})();
