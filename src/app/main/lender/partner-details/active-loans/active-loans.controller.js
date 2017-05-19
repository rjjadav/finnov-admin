/**
 * Created by rahul j jadav on 3/22/2017.
 */
(function () {
  'use strict';

  angular.module('app.main.lender.partner-details')
    .controller('ActiveLoansController',ActiveLoansController);

  ActiveLoansController.$inject = ['$stateParams','data','api'];

  function ActiveLoansController($stateParams, data, api){
    var loans = this;

    loans.getActiveLoans = getActiveLoans;
    loans.getTotalRepayments = getTotalRepayments;
    loans.getBorrowerDetail = getBorrowerDetail;

    loans.activeloans = undefined;
    loans.partnerId = $stateParams.partnerId;

    loans.getActiveLoans();
    function getActiveLoans(){
      data.get(api.getActiveLoans, {partnerId: $stateParams.partnerId},false)
        .then(function (response) {
          console.log(response);
          loans.activeloans = response.data.loans;
        })
    }

    function getTotalRepayments(repayment){
      var sum = 0;
      if(repayment){
        for(var i=0; i < repayment.length; i++){
          sum += repayment[i].amount;
        }
      }
      
      return sum;
    }


    function getBorrowerDetail(loanDetails){
      data.get(api.getBorrowerDetail,{custCode: loanDetails.custCode, partnerId: $stateParams.partnerId}, true)
      .then(function(response){
        console.log(response);
      });
    }
  }
})();
