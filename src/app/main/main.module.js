/**
 * Created by rahul j jadav on 3/8/2017.
 */
(function () {
  'use strict';

  angular.module('app.main',[
    'app.main.auth',
    'app.main.lender',
    'app.main.partner',
    'app.main.loans',
  ])
    .config(config);

  config.$inject = [];

  function config(){}
})();
