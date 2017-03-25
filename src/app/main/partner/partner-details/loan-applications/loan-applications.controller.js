/**
 * Created by rahul j jadav on 3/22/2017.
 */
(function () {
  'use strict';

  angular.module('app.main.partner.partner-details')
    .controller('LoanApplicationsController',LoanApplicationsController);

  LoanApplicationsController.$inject = ['$stateParams','data','api'];

  function LoanApplicationsController($stateParams, data, api) {
    var applications = this;
    applications.getLoanApplications = getLoanApplications;
    applications.createLoans = createLoans;

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

  }
})();
