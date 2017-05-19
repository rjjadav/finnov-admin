/**
 * Created by rahul j jadav on 3/10/2017.
 */
(function () {
  'use strict';

  angular.module('app.main.lender.partner-details',[])
    .config(config);

  config.$inject=['$stateProvider'];

  function config($stateProvider){
    $stateProvider
      .state('app.main_lender.details',{
        url:'/partner-details/:partnerId', //
        redirectTo : 'app.main_partner.details.loan-request',
        views: {
          'partnerContent@app.main_lender':{
            templateUrl: 'app/main/lender/partner-details/partner-details.html',
            controller: 'PartnerDetailsController',
            controllerAs: 'partnerDetails'
          }
        },
        data:{
          role: 'lender'
        }
      })
      .state('app.main_lender.details.loan-request',{
        url: '/new-loan-request',
        views: {
          'loanRequestView@app.main_lender.details':{
            templateUrl: 'app/main/lender/partner-details/loan-request/loan-request.html',
            controller: 'LoanRequestController',
            controllerAs: 'loanReq'
          }
        },
        data:{
          role: 'lender',
          tabIndex: 0
        }
      })
      .state('app.main_lender.details.loan-request-list',{
        url: '/loan-request-list',
        views: {
          'loanRequestListView@app.main_lender.details': {
            templateUrl: 'app/main/lender/partner-details/loan-request-list/loan-request-list.html',
            controller: 'LoanRequestListController',
            controllerAs: 'list'
          }
        },
        data:{
          role: 'lender',
          tabIndex: 1
        }
      })
      // .state('app.main_lender.details.new-user',{
      //   url: '/new-user',
      //   views: {
      //     'newUserView@app.main_lender.details': {
      //       templateUrl: 'app/main/lender/partner-details/new-user/new-user.html',
      //       controller: 'NewUserController',
      //       controllerAs: 'newUser'
      //     }
      //   },
      //   data:{
      //     role: 'lender',
      //     tabIndex: 2
      //   }
      // })
      .state('app.main_lender.details.loan-applications',{
        url: '/loan-applications',
        views: {
          'loanApplicationsView@app.main_lender.details': {
            templateUrl: 'app/main/lender/partner-details/loan-applications/loan-applications.html',
            controller: 'LoanApplicationsController',
            controllerAs: 'applications'
          }
        },
        data:{
          role: 'lender',
          tabIndex: 2
        }
      })
      .state('app.main_lender.details.active-loans',{
        url: '/active-loans',
        views: {
          'activeLoansView@app.main_lender.details': {
            templateUrl: 'app/main/lender/partner-details/active-loans/active-loans.html',
            controller: 'ActiveLoansController',
            controllerAs: 'loans'
          }
        },
        data:{
          role: 'lender',
          tabIndex: 3
        }
      })
      .state('app.main_lender.details.repayments',{
        url: '/repayments',
        views: {
          'repaymentsView@app.main_lender.details': {
            templateUrl: 'app/main/lender/partner-details/repayments/repayments.html',
            controller: 'RepaymentController',//'RepaymentsController',
            controllerAs: 'repayments'
          }
        },
        data:{
          role: 'lender',
          tabIndex: 4
        }
      })
      .state('app.main_lender.details.batch-job',{
        url: '/batch-job',
        views: {
          'batchJobView@app.main_lender.details': {
            templateUrl: 'app/main/lender/partner-details/batch-job/batch-job.html',
            controller: 'BatchJobController',//'RepaymentsController',
            controllerAs: 'batchJob'
          }
        },
        data:{
          role: 'lender',
          tabIndex: 5
        }
      })
      .state('app.main_lender.details.loan-criteria',{
        url: '/loan-criteria',
        views: {
          'criteriaView@app.main_lender.details': {
            templateUrl: 'app/main/lender/partner-details/loan-criteria/loan-criteria.html',
            controller: 'LoanCriteriaController',//'RepaymentsController',
            controllerAs: 'criteria'
          }
        },
        data:{
          role: 'lender',
          tabIndex: 6
        }
      })

      .state('app.main_lender.details.borrower',{
        url: '/borrower/:custCode',
        views: {
          'content@app': {
            templateUrl: 'app/main/lender/partner-details/borrower-profile/borrower-profile.html',
            controller: 'BorrowerProfileController',//'RepaymentsController',
            controllerAs: 'profile'
          }
        },
        data:{
          role: 'lender',
        }
      });
  }
})();
