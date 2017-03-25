/**
 * Created by rahul j jadav on 3/22/2017.
 */
(function () {
  'use strict';

  angular.module('app.main.loans')
    .controller('ApprovedLoansController',ApprovedLoansController);

  ApprovedLoansController.$inject = ['data', 'api'];

  function ApprovedLoansController(data, api) {
    var approved = this;
    approved.getApprovedRequest = getApprovedRequest;

    approved.approvedLoansList = undefined;

    approved.getApprovedRequest();
    function getApprovedRequest() {
      data.get(api.getApprovedRequest, null, true)
        .then(function (response) {

          approved.approvedLoansList = response.data.loanRequests
          console.log(approved.approvedLoansList);
        })
    }


  }
})();
