/**
 * Created by rahul j jadav on 3/10/2017.
 */
(function () {
  'use strict';

  angular.module('app.main.partner.partner-details',[])
    .config(config);

  config.$inject=['$stateProvider'];

  function config($stateProvider){
    $stateProvider
      .state('app.main_partner.details',{
        url:'/details/:partnerId', //
        redirectTo : 'app.main_partner.details.loan-request',
        views: {
          'partnerContent@app.main_partner':{
            templateUrl: 'app/main/partner/partner-details/partner-details.html',
            controller: 'PartnerDetailsController',
            controllerAs: 'partnerDetails'
          }
        },
        data:{
          role: 'lender'
        }
      })
      .state('app.main_partner.details.loan-request',{
        url: '/new-loan-request',
        views: {
          'loanRequestView@app.main_partner.details':{
            templateUrl: 'app/main/partner/partner-details/loan-request/loan-request.html',
            controller: 'LoanRequestController',
            controllerAs: 'loanReq'
          }
        },
        data:{
          role: 'lender',
          tabIndex: 0
        }
      })
      .state('app.main_partner.details.loan-request-list',{
        url: '/loan-request-list',
        views: {
          'loanRequestListView@app.main_partner.details': {
            templateUrl: 'app/main/partner/partner-details/loan-request-list/loan-request-list.html',
            controller: 'LoanRequestListController',
            controllerAs: 'list'
          }
        },
        data:{
          role: 'lender',
          tabIndex: 1
        }
      })
      .state('app.main_partner.details.new-user',{
        url: '/new-user',
        views: {
          'newUserView@app.main_partner.details': {
            templateUrl: 'app/main/partner/partner-details/new-user/new-user.html',
            controller: 'NewUserController',
            controllerAs: 'newUser'
          }
        },
        data:{
          role: 'lender',
          tabIndex: 2
        }
      })
      .state('app.main_partner.details.loan-applications',{
        url: '/loan-applications',
        views: {
          'loanApplicationsView@app.main_partner.details': {
            templateUrl: 'app/main/partner/partner-details/loan-applications/loan-applications.html',
            controller: 'LoanApplicationsController',
            controllerAs: 'applications'
          }
        },
        data:{
          role: 'lender',
          tabIndex: 3
        }
      })
      .state('app.main_partner.details.active-loans',{
        url: '/active-loans',
        views: {
          'activeLoansView@app.main_partner.details': {
            templateUrl: 'app/main/partner/partner-details/active-loans/active-loans.html',
            controller: 'ActiveLoansController',
            controllerAs: 'loans'
          }
        },
        data:{
          role: 'lender',
          tabIndex: 4
        }
      });
  }
})();
