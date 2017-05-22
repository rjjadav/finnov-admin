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
	            templateUrl: 'app/main/partner-backend/borrowers.html',
	            controller: 'PartnerBorrowersController',
	            // controllerAs: 'borrowers'
	          }
	        },
	        data:{
	        	role : 'partner_admin'
	        }
		})
	}
})();