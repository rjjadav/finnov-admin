(function(){
	'use strict';

	angular.module('app.main.admin.lender-details')
	.controller('CreateLenderUserController',CreateLenderUserController);

	CreateLenderUserController.$inject = ['$mdDialog','api','data','lenderId'];

	function CreateLenderUserController($mdDialog, api, data, lenderId){
		console.log('CreateLenderUserController');
		var user = this;

		user.cancel = cancel;
		user.createLenderUser = createLenderUser;

		function cancel(){
			$mdDialog.cancel();
		}

		function createLenderUser(userDetails){
			userDetails.lenderId = lenderId
			data.post(api.createLenderUser, userDetails, false)
			.then(function(response){
				console.log(response);
				if(response.data.accountCreated){
					$mdDialog.hide({accountCreated : true});
				}
			})
			.catch(function(error){
				console.log(error);
			});
		}
	}
})();