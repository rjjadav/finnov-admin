/**
 * Created by rahul j jadav on 3/22/2017.
 */
(function () {
  'use strict';

  angular.module('app.main.loans')
    .controller('RejectedLoansController',RejectedLoansController);

  RejectedLoansController.$inject = ['data', 'api'];

  function RejectedLoansController(data, api) {
    var rejected = this;
    rejected.getRejectedRequest = getRejectedRequest;

    rejected.rejectedLoansList = undefined;

    rejected.getRejectedRequest();
    function getRejectedRequest(){
      data.get(api.getRejectedRequest, null, true)
        .then(function (response) {
          rejected.rejectedLoansList = response.data.loanRequests;
        });
    }
  }
})();
