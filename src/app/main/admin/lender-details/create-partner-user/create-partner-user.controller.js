(function(){
	'use strict';

	angular.module('app.main.admin.lender-details')
	.controller('CreatePartnerUserController',CreatePartnerUserController);

	CreatePartnerUserController.$inject = ['$mdDialog','data','api','lenderId','partnerId'];

	function CreatePartnerUserController($mdDialog, data, api, lenderId, partnerId){
		var user = this;

		user.createPartnerLogin = createPartnerLogin;

		function createPartnerLogin(userDetails){
			userDetails.partnerId = partnerId;
			userDetails.lenderId = lenderId;
			data.post(api.createPartnerLogin, userDetails, false)
			.then(function(response){
				console.log(response);
				if(response.data.accountCreated){
					$mdDialog.hide({accountCreated : true});
				}
			})
			.catch();
		}
	}

})();