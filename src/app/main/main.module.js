/**
 * Created by rahul j jadav on 3/8/2017.
 */
(function () {
  'use strict';

  angular.module('app.main',[
    'app.main.auth',
    'app.main.admin',
    'app.main.lender',
    'app.main.loans',
    'app.main.reports',
    'app.main.partner-backend',
  ])
    .config(config);

  config.$inject = [];

  function config(){}
})();
