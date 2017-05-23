(function(){
	'use strict';
	angular.module('app.main.borrowers')
	.controller('UploadDocumentsController', UploadDocumentsController);

	UploadDocumentsController.$inject = ['Upload','data','api'];

	function UploadDocumentsController(Upload, data, api){
		var kyc = this;
    kyc.uploadKyc = uploadKyc;
    kyc.previewSelfie = previewSelfie;
    kyc.previewAadhar = previewAadhar;
    kyc.previewPancard = previewPancard;
    kyc.uploadSelfie = uploadSelfie;
    kyc.uploadAadhar = uploadAadhar;
    kyc.uploadPan = uploadPan;

    kyc.uploading = false;
    kyc.selfieUploaded = false;
    kyc.aadharUploaded = false;
    kyc.panUploaded = false;


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

    function uploadSelfie(selfie){
		data.upload(api.addSelfie,{selfie : selfie}, false)
		.then(function(response){
      console.log(response.status);
			if(response.status == 201){
				kyc.selfieUploaded = true;
			}
		})
		.catch()
    }

	function uploadAadhar(aadhar){
		data.upload(api.addAadhar,{aadhar : aadhar}, false)
		.then(function(response){
			if(response.status == 201){
				kyc.aadharUploaded = true;
			}
		})
		.catch()
	}

	function uploadPan(pancard){
		data.upload(api.addPancard,{pancard : pancard}, false)
		.then(function(response){
			if(response.status == 201){
				kyc.panUploaded = true;
			}
		})
		.catch()
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