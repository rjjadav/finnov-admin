/**
 * Created by rahul j jadav on 3/9/2017.
 */
//https://drive.google.com/open?id=0B5VXEXop8Qaqa2RkTFhVQ2thN1U
// https://drive.google.com/open?id=0B5VXEXop8QaqajRzRVNsRmdTelE
(function () {
  'use strict';

  angular.module('app.main.lender',[
    'app.main.lender.partner-details'
  ])
    .config(config);

  config.$inject= ['$stateProvider'];

  function config($stateProvider) {
    $stateProvider
      .state('app.main_lender',{
        url: '/lender',
        abstract: true,
        views:{
          'content@app':{
            template: '<div ui-view="partnerContent"></div>'
          }
        }
      })

      .state('app.main_lender.dashboard',{
        url: '/dashboard',
        views: {
          'partnerContent@app.main_lender':{
            templateUrl: 'app/main/lender/dashboard/dashboard.html',
            controller: 'LenderDashboardController',
            controllerAs: 'lDash'
          }
        }
      })

      // .state('app.main_lender.add-partner',{
      //   url: '/add-partner',
      //   views:{
      //     'partnerContent@app.main_lender':{
      //       templateUrl: 'app/main/lender/add-partner/add-partner.html',
      //       controller: 'AddPartnerController',
      //       controllerAs: 'add'
      //     }
      //   },
      //   data:{
      //     role: 'lender'
      //   }
      // })
      .state('app.main_lender.partner-list',{
        url: '/partner-list',
        views:{
          'partnerContent@app.main_lender':{
            templateUrl: 'app/main/admin/partner-list/partner-list.html',
            controller: 'ListPartnerController',
            controllerAs: 'list'
          }
        },
        data:{
          role: 'lender'
        }
      })
  }
})();
