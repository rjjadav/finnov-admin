(function(){
	'use strict';

	angular.module('app.main.lender.partner-details')
	.controller('RepaymentController',RepaymentController);

	RepaymentController.$inject=['$stateParams','toastr','api','data'];

	function RepaymentController($stateParams, toastr, api, data){
		var repayments = this;

		repayments.uploadFile = uploadFile;
		repayments.loading = false;
		repayments.bulkupdatedSuccess = false;
		repayments.progress = 0;

		function uploadFile(file){
			repayments.loading = true;
			data.upload(api.bulkRepayment, {'excel' : file, 'partnerId': $stateParams.partnerId}, false)
			.then(function(response){
				console.log(response);
				if(response.data.bulkupdatedSuccess){
					repayments.bulkupdatedSuccess = true;
					toastr.success('File Uploaded Successfully', 'Success');
				}else{
					toastr.error('Failure Uploading File', 'Failure');
				}
				repayments.loading = false;
			},function(error) {
				console.log(error);
			},function (evt) {
				repayments.progress = parseInt(100.0 * evt.loaded / evt.total);
				console.log('progress: ' + repayments.progress + '% ');
			})
			.catch();
		}

		
	}
})();