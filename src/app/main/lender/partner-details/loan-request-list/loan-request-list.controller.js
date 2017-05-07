/**
 * Created by rahul j jadav on 3/10/2017.
 */
(function () {
  'use strict';

  angular.module('app.main.lender.partner-details')
    .controller('LoanRequestListController', LoanRequestListController);

  LoanRequestListController.$inject=['$stateParams','$mdPanel','toastr','api','data'];
  function LoanRequestListController($stateParams, $mdPanel, toastr, api, data){
    console.log('controller');
    var list = this;
    list.getNewLoanRequest = getNewLoanRequest;
    list.updateList = updateList;
    list.openFilters = openFilters;
    list.applyFilters = applyFilters;
    list.getClassName = getClassName;

    list.loanRequestListObj = undefined;
    list.loanRequestList = undefined;
    list.filters = undefined;

    list.getNewLoanRequest();
    function getNewLoanRequest() {
      data.get(api.getNewLoanRequest,{partnerId : $stateParams.partnerId}, true)
        .then(function(response){
          console.log(response);
          if(response.data.list){
            list.loanRequestList = response.data.list;
            list.loanRequestListObj = angular.copy(list.loanRequestList);
          }
        })
        .catch()
    }

    function updateList(loanList){
      // var updatedList = [];
      // angular.forEach(loanList, function (obj) {
      //   if(obj.checked){
      //     var cObj = angular.copy(obj);
      //     delete cObj.checked;
      //     updatedList.push(cObj);
      //   }
      // });
      // console.log(updatedList);

      data.post(api.updateLoanRequest, {list:loanList}, false)
        .then(function(response){
          if(response.data.statusUpdated == true){
            toastr.success('Loan Request List Updated', 'Success');
          }else{
            toastr.error('Failure updating Loan Request List ', 'Failure');
          }
        });
    }


    function openFilters(ev){
      var position = $mdPanel.newPanelPosition()
      .relativeTo(ev.target)
      .addPanelPosition($mdPanel.xPosition.ALIGN_END, $mdPanel.yPosition.BELOW);

      var config = {
        attachTo: angular.element(document.body),
        controller: LoanRequestListFiltersController,
        controllerAs: 'filters',
        templateUrl: 'app/main/lender/partner-details/loan-request-list/loan-request-list-filters/loan-request-list-filters.html',
        panelClass: 'demo-menu-example',
        position: position,
        locals: {
        },
        openFrom: ev,
        clickOutsideToClose: true,
        escapeToClose: true,
        focusOnOpen: false,
        zIndex: 2
      };

      $mdPanel.open(config)
      .then(function(result) {
          console.log(result);
        });
    }


    function LoanRequestListFiltersController(mdPanelRef){
      console.log(list);
      var filters = this;

      filters.close = close;
      filters.apply = apply;

      function close(){
        mdPanelRef.close();
      }


      function apply(filterObj){
        // list.filters = filterObj;
        list.applyFilters(filterObj)
        mdPanelRef.close();
      }

    }

    function applyFilters(filterObj){

      console.log(filterObj);
      if(filterObj){
        if(filterObj.averageTxns){
          var condition = filterObj.averageTxns.condition;
          var listObj = angular.copy(list.loanRequestListObj); 
          console.log(list.loanRequestListObj);
          list.loanRequestList = undefined;
          switch(condition){
            case "=" : 
              angular.forEach(listObj, function(obj, index){
                console.log(obj);
                if(obj.averageMonTxn == filterObj.averageTxns.value){
                  obj.status = 'Approved';
                }else{
                  obj.status = 'Rejected';
                }
              });
              break;
            case "<" :
              angular.forEach(listObj, function(obj, index){
                console.log(obj);
                if(obj.averageMonTxn < filterObj.averageTxns.value){
                  obj.status = 'Approved';
                }else{
                  obj.status = 'Rejected';
                }
              });
              break;
            case ">" :
              angular.forEach(listObj, function(obj, index){
                console.log(obj);
                if(obj.averageMonTxn > filterObj.averageTxns.value){
                  obj.status = 'Approved';
                }else{
                  obj.status = 'Rejected';
                }
              });
              break;
          }

          list.loanRequestList = listObj;
          console.log(list.loanRequestList);
        }
      }

    }


    function getClassName(row){
      console.log(row);
      if(row == 'Approved'){
        return 'bg-success';
      }else if(row == 'Rejected'){
        return 'bg-denger';
      }else{
        return 'bg-success';
      }



    }
  }
})();
