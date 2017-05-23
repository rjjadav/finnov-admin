(function(){
	'use strict';

	angular.module('app.main.partner-backend')
	.controller('CreateAccountController',CreateAccountController);

	CreateAccountController.$inject = ['$scope','toastr','data','api'];

	function CreateAccountController($scope, toastr, data, api){
		var account = this;
		account.createAccount = createAccount;

		function createAccount(cred){
			cred.tenant = 'EzSwype';

			data.post(api.createAccount, cred, false)
			.then(function(response){
				console.log(response);
				toastr.success('Account Created', 'Success');
			})
		}
	}
})();