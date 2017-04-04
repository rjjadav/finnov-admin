/**
 * Created by rahul j jadav on 4/3/2017.
 */
(function(){
  'use strict';

  angular.module('app.main.reports',[])
    .config(config);

  config.$inject = ['$stateProvider'];

  function config($stateProvider){
    $stateProvider
      .state('app.main_reports',{
        url: '/reports',
        abstract: true
      })

      .state('app.main_reports.active-loans',{
        url: '/active-loans',
        views:{
          'content@app':{
            templateUrl: 'app/main/reports/active-loans/active-loans.html',
            controller: 'ActiveLoansReportsController',
            controllerAs: 'alReport'
          }
        }
      })
  }
})();
