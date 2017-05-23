(function(){
	'use strict';

	angular.module('app.main.partner-backend',[])
	.config(config);

	config.$inject = ['$stateProvider'];

	function config($stateProvider){
		$stateProvider.state('app.main_borrowers',{
			url: '/borrowers',
	        views:{
	          'content@app':{
	            templateUrl: 'app/main/partner-backend/borrowers/borrowers.html',
	            controller: 'PartnerBorrowersController',
	            controllerAs: 'borrowers'
	          }
	        },
	        data:{
	        	role : 'partner_admin'
	        }
		})
		.state('app.main_create-account',{
			url: '/create-account',
	        views:{
	          'content@app':{
	            templateUrl: 'app/main/partner-backend/create-account/create-account.html',
	            controller: 'CreateAccountController',
	            controllerAs: 'account'
	          }
	        },
	        data:{
	        	role : 'partner_admin'
	        }
		})
	}
})();