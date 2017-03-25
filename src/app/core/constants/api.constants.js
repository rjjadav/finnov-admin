/**
 * Created by rahul j jadav on 3/8/2017.
 */
(function () {
  'use strict';

  angular.module('app.core')
    .constant('api',(api)());

  api.$inject = [];

  function api(){
    var env = 'dev';

    var url={
      dev:{
        backend: 'http://45.56.97.181:8080/Finnov'
      },
      uat:{

      }
    }

    var config={
      login            : url[env].backend + '/oauth/token',

      createLender     : url[env].backend + '/admin/createLender',
      getAllLenders    : url[env].backend + '/admin/getAllLenders',
      addLenderDetails : url[env].backend + '/admin/addLenderDetails',
      getUserType      : url[env].backend + '/admin/getUserType',

      createPartner    : url[env].backend + '/lender/createPartner',
      getAllPartner    : url[env].backend + '/lender/getAllPartner',
      makePartnerActive: url[env].backend + '/lender/makePartnerActive',
      bulkUpload       : url[env].backend + '/lender/bulkUpload',
      getNewLoanRequest: url[env].backend + '/lender/getNewLoanRequests',
      updateLoanRequest: url[env].backend + '/lender/updateLoanRequest',
      createPartnerLogin:url[env].backend + '/lender/createPartnerLogin',
      getLoanApplications:  url[env].backend + '/lender/getLoanApplications',
      createLoans:          url[env].backend + '/lender/createLoans',
      getActiveLoans:       url[env].backend + '/lender/getActiveLoans',

      getApprovedRequest: url[env].backend + '/partner/getApprovedRequest',
      getRejectedRequest: url[env].backend + '/partner/getRejectedRequest',
      getApplicantByCustCode: url[env].backend + '/partner/getApplicantByCustCode',
      getBorroweByCustCode:   url[env].backend + '/partner/getBorroweByCustCode',
      uploadKyc:              url[env].backend + '/partner/uploadKyc',
      createLoanApplication:  url[env].backend + '/partner/createLoanApplication',
    }
    return config;
  }
})();
