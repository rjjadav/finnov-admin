/**
 * Created by rahul j jadav on 3/22/2017.
 */
(function () {
  'use strict';

  angular.module('app.main.loans')
    .controller('KycUploadController', KycUploadController);

  KycUploadController.$inject = ['$mdDialog','toastr','Upload','data','api','custCode'];

  function KycUploadController($mdDialog, toastr, Upload, data, api, custCode) {

    var kyc = this;
    kyc.uploadKyc = uploadKyc;
    kyc.previewSelfie = previewSelfie;
    kyc.previewAadhar = previewAadhar;
    kyc.previewPancard = previewPancard;

    kyc.uploading = false;


    function uploadKyc(docs){
      kyc.uploading = true;
      docs.custCode = custCode;

      var doc = {
        custCode : custCode,
        aadhar : dataURLtoFile(kyc.aadharCroppedImage, 'aadhar.png'),
        pancard : dataURLtoFile(kyc.pancardCroppedImage, 'pan.png'),
        selfie: docs.selfie
      }

      console.log(doc);
      // var aadharFile = dataURLtoFile(kyc.pancardCroppedImage, docs.aadhar.name);
      // console.log(aadharFile);

      data.upload(api.uploadKyc, doc, false)
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


    function previewSelfie(image){
      Upload.base64DataUrl(image).then(function(urls){
        kyc.selfiePreviewImage = urls;
      });
    }


    function previewAadhar(image){
      Upload.base64DataUrl(image).then(function(urls){
        kyc.aadharPreviewImage = urls;
      });
    }

    function previewPancard(image){
      Upload.base64DataUrl(image).then(function(urls){
        kyc.pancardPreviewImage = urls;
      });
    }


    function dataURLtoFile(dataurl, filename) {
      var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
      while(n--){
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new File([u8arr], filename, {type:mime});
    }
  }
})();
