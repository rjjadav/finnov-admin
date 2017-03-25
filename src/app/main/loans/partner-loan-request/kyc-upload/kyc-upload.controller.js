/**
 * Created by rahul j jadav on 3/22/2017.
 */
(function () {
  'use strict';

  angular.module('app.main.loans')
    .controller('KycUploadController', KycUploadController);

  KycUploadController.$inject = ['$mdDialog','toastr','data','api','custCode'];

  function KycUploadController($mdDialog, toastr, data, api, custCode) {

    var kyc = this;
    kyc.uploadKyc = uploadKyc;
    kyc.uploading = false;


    function uploadKyc(docs){
      kyc.uploading = true;
      docs.custCode = custCode;
      data.upload(api.uploadKyc, docs, false)
        .then(function(response){
          console.log(response);
          if(response.data.kycUploaded == true){
            toastr.success('Kyc Uploaded', 'Success');
            $mdDialog.hide();
          }else{
            toastr.error('Fail to upload Kyc', 'Failure');
          }
          kyc.uploading = false;
        })

    }
  }
})();
