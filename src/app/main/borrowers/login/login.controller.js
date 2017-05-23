(function(){
	'use strict';
	angular.module('app.main.borrowers')
	.controller('BorrowersLoginController', BorrowersLoginController);

	BorrowersLoginController.$inject =  ['$rootScope','$cookies','$state','toastr','CONST', 'api', 'data', 'UserService'];

	function BorrowersLoginController($rootScope, $cookies, $state, toastr, CONST, api, data, UserService){
		var login = this;
		login.adminLogin = adminLogin;
		login.getUserType = getUserType;

		function adminLogin(user){
			login.loading = true;
			user.grant_type = 'password';
			user.client_id = 'restapp';
			user.client_secret = "restapp";

			data.get(api.login, user, false)
			.then(function (response) {
			  console.log(response);
			  if(response.status == 200){
				  $cookies.put('accessToken',response.data.access_token);
				  $cookies.putObject('refreshToken',response.data.refresh_token);
				  login.getUserType();
			  }else{
				toastr.error('Invalid Email and Password', 'Error');
				login.loading = false;
			  }

			})
			.catch(function (error) {
			  console.log(error);
			  toastr.error('Invalid Username OR Password', 'Error');
			  login.loading = false;
			})
		}

		function getUserType(){
	      UserService.getUserType()
	      .then(function(response){
	        if(response.status === 200){
	          $rootScope.loggedIn = true;
	          $rootScope.role = response.data.accountType;
	          $rootScope.name = response.data.name;
	          $rootScope.$broadcast('user_login_success');
	          // $state.go(CONST.defaultRedirect[$rootScope.role]);
	          $state.go('app.main_borrower.upload');
	        }else{
	          $rootScope.loggedIn = false;
	        }
	        login.loading = false;
	      })
	      .catch(function (error) {
	        login.loading = false;
	      })
	    }
	}
})();