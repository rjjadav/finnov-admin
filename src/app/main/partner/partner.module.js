/**
 * Created by rahul j jadav on 3/9/2017.
 */
//https://drive.google.com/open?id=0B5VXEXop8Qaqa2RkTFhVQ2thN1U
// https://drive.google.com/open?id=0B5VXEXop8QaqajRzRVNsRmdTelE
(function () {
  'use strict';

  angular.module('app.main.partner',[
    'app.main.partner.partner-details'
  ])
    .config(config);

  config.$inject= ['$stateProvider'];

  function config($stateProvider) {
    $stateProvider
      .state('app.main_partner',{
        url: '/partner',
        abstract: true,
        views:{
          'content@app':{
            template: '<div ui-view="partnerContent"></div>'
          }
        }
      })

      .state('app.main_partner.add',{
        url: '/add',
        views:{
          'partnerContent@app.main_partner':{
            templateUrl: 'app/main/partner/add-partner/add-partner.html',
            controller: 'AddPartnerController',
            controllerAs: 'add'
          }
        },
        data:{
          role: 'lender'
        }
      })
      .state('app.main_partner.list',{
        url: '/list',
        views:{
          'partnerContent@app.main_partner':{
            templateUrl: 'app/main/partner/partner-list/partner-list.html',
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
