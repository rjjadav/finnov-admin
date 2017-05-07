/**
 * Created by rahul j jadav on 3/10/2017.
 */
(function () {
  'use strict';

  angular.module('app.main.lender.partner-details')
    .controller('LoanRequestController', LoanRequestController);

  LoanRequestController.$inject=['$stateParams','toastr','api','data'];

  function LoanRequestController($stateParams,toastr, api, data){
    console.log($stateParams);
    var loanReq = this;
    loanReq.uploadFile = uploadFile;

    loanReq.progress = 0;
    loanReq.loading = false;
    loanReq.requestList = undefined;

    function uploadFile(file){
      // console.log(file);
      loanReq.loading = true;
      data.upload(api.bulkUpload, {'excel' : file, 'partnerId': $stateParams.partnerId}, false)
        .then(function(response){
          console.log(response);
          if(response.data.list){
            loanReq.requestList = response.data.list;
            toastr.success('File Uploaded Successfully', 'Success');
          }else{
            toastr.error('Failure Uploading File', 'Failure');
          }
          loanReq.loading = false;
        },function(error) {
          console.log(error);
        },function (evt) {
          loanReq.progress = parseInt(100.0 * evt.loaded / evt.total);
          // console.log('progress: ' + progressPercentage + '% ');
        })
        .catch();
    }
  }
})();
