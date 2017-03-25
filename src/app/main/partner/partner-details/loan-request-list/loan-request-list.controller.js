/**
 * Created by rahul j jadav on 3/10/2017.
 */
(function () {
  'use strict';

  angular.module('app.main.partner.partner-details')
    .controller('LoanRequestListController', LoanRequestListController);

  LoanRequestListController.$inject=['$stateParams','toastr','api','data'];
  function LoanRequestListController($stateParams, toastr, api, data){
    console.log('controller');
    var list = this;
    list.getNewLoanRequest = getNewLoanRequest;
    list.updateList = updateList;

    list.loanRequestList = undefined;

    list.getNewLoanRequest();
    function getNewLoanRequest() {
      data.get(api.getNewLoanRequest,{partnerId : $stateParams.partnerId}, true)
        .then(function(response){
          console.log(response);
          if(response.data.list){
            list.loanRequestList = response.data.list;
          }
        })
        .catch()
    }

    function updateList(loanList){
      var updatedList = [];
      angular.forEach(loanList, function (obj) {
        if(obj.checked){
          var cObj = angular.copy(obj);
          delete cObj.checked;
          updatedList.push(cObj);
        }
      });
      console.log(updatedList);

      data.post(api.updateLoanRequest, {list:updatedList}, false)
        .then(function(response){
          if(response.data.statusUpdated == true){
            toastr.success('Loan Request List Updated', 'Success');
          }else{
            toastr.error('Failure updating Loan Request List ', 'Failure');
          }
        });
    }
  }
})();
