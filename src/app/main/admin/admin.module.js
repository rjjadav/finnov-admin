/**
 * Created by rahul j jadav on 3/8/2017.
 */
(function () {
  'use strict';

  angular.module('app.main.admin',[
    'app.main.admin.lender-details'
    ])
    .config(config);

  config.$inject = ['$stateProvider'];

  function config($stateProvider) {
    $stateProvider
    .state('app.main_admin',{
      url: '/admin',
      abstract: true
    })
    .state('app.main_admin.add',{
      url: '/new-lender',
      views:{
        'content@app': {
          templateUrl: 'app/main/admin/add-lender/add-lender.html',
          controller: 'AddLenderController',
          controllerAs: 'lender'
        }
      },
      data: {
        role: 'Finnov'
      }
    })
    .state('app.main_admin.list',{
      url: '/list',
      views:{
        'content@app': {
          templateUrl: 'app/main/admin/lender-list/lender-list.html',
          controller: 'LenderListController',
          controllerAs: 'list'
        }
      },
      data: {
        role: 'Finnov'
      }
    })
    .state('app.main_admin.add-partner',{
        url: '/add-partner',
        views:{
          'content@app':{
            templateUrl: 'app/main/admin/add-partner/add-partner.html',
            controller: 'AddPartnerController',
            controllerAs: 'add'
          }
        },
        data:{
          role: 'Finnov'
        }
      })
      .state('app.main_admin.partner-list',{
        url: '/partner-list',
        views:{
          'content@app':{
            templateUrl: 'app/main/admin/partner-list/partner-list.html',
            controller: 'ListPartnerController',
            controllerAs: 'list'
          }
        },
        data:{
          role: 'Finnov'
        }
      })
  }
})();
