(function(){
	'use strict'

	angular.module('app.main.lender.partner-details')
	.controller('BorrowerProfileController', BorrowerProfileController);

	BorrowerProfileController.$inject = ['$stateParams','data', 'api'];

	function BorrowerProfileController($stateParams, data, api){
		var profile = this;
		profile.imagePath = api.imagePath;
		profile.getBorrowerDetail = getBorrowerDetail;


		profile.custCode = $stateParams.custCode;
		profile.profileData = undefined;

		profile.getBorrowerDetail();

		function getBorrowerDetail(loanDetails){
			data.get(api.getBorrowerDetail,{custCode: $stateParams.custCode, partnerId: $stateParams.partnerId}, true)
			.then(function(response){
				console.log(response);
				profile.profileData = response.data;
			});
		}
		console.log($stateParams);


	}
})();