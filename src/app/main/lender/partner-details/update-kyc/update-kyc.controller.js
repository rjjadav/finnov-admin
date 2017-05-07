(function(){
	'use strict';

	angular.module('app.main.lender.partner-details')
	.controller('UpdateKYCController',UpdateKYCController);


	UpdateKYCController.$inject = ['$mdDialog','data','api','application','partnerId'];
	function UpdateKYCController($mdDialog, data, api, application, partnerId){
		console.log(application);
		var kyc = this;

		kyc.getKycDetail = getKycDetail;
		kyc.cancel = cancel;
		kyc.saveKyc = saveKyc;

		kyc.kycData = undefined;


		kyc.getKycDetail();
		function getKycDetail(){
			data.get(api.getKycDetail, {custCode: application.custCode, partnerId : partnerId})
			.then(function(response){
				// console.log(response);
				kyc.kycData = response.data.applicant;
				console.log(kyc.kycData);
			})
			.catch();
		}

		function cancel(){
			$mdDialog.cancel();
		}

		function saveKyc(){
			data.post(api.editKycDetail,{applicant: kyc.kycData, loanApplicationId: application.id},false)
			.then(function(response){
				console.log(response);
				if(response.data.kycEdited){
					$mdDialog.hide({kycEdited : true});
				}
			})
			.catch()
		}
	}	
})();