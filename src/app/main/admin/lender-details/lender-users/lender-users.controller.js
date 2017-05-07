(function(){
	'use strict';


	angular.module('app.main.admin.lender-details')
	.controller('LenderUsersController', LenderUsersController);

	LenderUsersController.$inject = ['$stateParams','$mdDialog','data','api'];

	function LenderUsersController($stateParams, $mdDialog, data, api){
		var lUsers = this;

		lUsers.createLenderUser = createLenderUser;
		lUsers.getLenderUsers = getLenderUsers;

		lUsers.userList = undefined;


		lUsers.getLenderUsers();
		function createLenderUser(ev){
			$mdDialog.show({
				controller: 'CreateLenderUserController',
				controllerAs: 'user',
				templateUrl: 'app/main/admin/lender-details/create-lender-user/create-lender-user.html',
				parent: angular.element(document.body),
				targetEvent: ev,
				clickOutsideToClose:true,
				fullscreen: true, // Only for -xs, -sm breakpoints.
				locals:{
					lenderId : $stateParams.id
				}
			})
			.then(function(userCreated) {
				if(userCreated){
					lUsers.getLenderUsers();
				}
				// $scope.status = 'You said the information was "' + answer + '".';
			}, function() {
				// $scope.status = 'You cancelled the dialog.';
			});
		}

		function getLenderUsers(){
			data.get(api.getLenderUsers, {lenderId : $stateParams.id}, true)
			.then(function(response){
				console.log(response);
				lUsers.userList = response.data.lenders;
			})
		}
	}
})();