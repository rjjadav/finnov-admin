/**
 * Created by rahul j jadav on 3/8/2017.
 */
(function () {
  'use strict';

  angular.module('app.main.lender',[])
    .config(config);

  config.$inject = ['$stateProvider'];

  function config($stateProvider) {
    $stateProvider
    .state('app.main_lender',{
      url: '/lender',
      abstract: true
    })
    .state('app.main_lender.add',{
      url: '/new',
      views:{
        'content@app': {
          templateUrl: 'app/main/lender/add-lender/add-lender.html',
          controller: 'AddLenderController',
          controllerAs: 'lender'
        }
      },
      data: {
        role: 'Finnov'
      }
    })
    .state('app.main_lender.list',{
      url: '/list',
      views:{
        'content@app': {
          templateUrl: 'app/main/lender/lender-list/lender-list.html',
          controller: 'LenderListController',
          controllerAs: 'list'
        }
      },
      data: {
        role: 'Finnov'
      }
    })
      .state('app.main_lender.details',{
        url: '/details/:id',
        views:{
          'content@app': {
            templateUrl: 'app/main/lender/lender-details/lender-details.html',
            controller: 'LenderDetailsController',
            controllerAs: 'details'
          }
        },
        data: {
          role: 'Finnov'
        }
      })
  }
})();
