/**
 * Created by rahul j jadav on 3/21/2017.
 */
(function(){
  'use strict';

  angular.module('app.main.loans',[])
    .config(config);

  config.$inject = ['$stateProvider'];

  function config($stateProvider){
      $stateProvider
        .state('app.main_loans',{
          url: '/loans',
          abstract: true,
          views:{
            'content@app' : {
              template: '<div ui-view="loansView"></div>'
            }
          }
        })
        .state('app.main_loans.loans-request',{
          url: '/loans-request',
          views:{
            'loansView@app.main_loans' : {
              templateUrl: 'app/main/partner/partner-loan-request/partner-loan-request.html',
              controller: 'PartnerLoanRequestController',
              controllerAs: 'plr'
            }
          }
        })
        .state('app.main_loans.loans-request.approved',{
          url: '/approved',
          views: {
            'approvedLoansView@app.main_loans.loans-request':{
              templateUrl: 'app/main/partner/partner-loan-request/approved-loans/approved-loans.html',
              controller: 'ApprovedLoansController',
              controllerAs: 'approved'
            }
          },
          data:{
            role: 'partner',
            tabIndex: 0
          }
        })
        .state('app.main_loans.loans-request.rejected',{
          url: '/rejected',
          views: {
            'rejectedLoansView@app.main_loans.loans-request':{
              templateUrl: 'app/main/partner/partner-loan-request/rejected-loans/rejected-loans.html',
              controller: 'RejectedLoansController',
              controllerAs: 'rejected'
            }
          },
          data:{
            role: 'partner',
            tabIndex: 1
          }
        });
  }
})();
