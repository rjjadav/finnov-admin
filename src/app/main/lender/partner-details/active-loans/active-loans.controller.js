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

    loans.activeloans = undefined;

    loans.getActiveLoans();
    function getActiveLoans(){
      data.get(api.getActiveLoans, {partnerId: $stateParams.partnerId},false)
        .then(function (response) {
          console.log(response);
          loans.activeloans = response.data.loans;
        })
    }
  }
})();
