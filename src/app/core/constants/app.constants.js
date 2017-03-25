/**
 * Created by rahul j jadav on 3/9/2017.
 */
(function () {
  'use strict';
  angular.module('app.core')
    .constant('CONST', (CONST)());

  CONST.$inject = [];

  function CONST(){
    var data = {
      defaultRedirect :{
        'Finnov' : 'app.main_lender.list',
        'lender': 'app.main_partner.list',
        'partner': 'app.main_loans.loans-request.approved'
      }
    };

    return data;
  }
})();
