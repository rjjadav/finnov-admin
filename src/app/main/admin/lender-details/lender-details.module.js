(function(){
	'use strict';

	angular.module('app.main.admin.lender-details',[])
	.config(config);

	config.$inject = ['$stateProvider'];

	function config($stateProvider){
		$stateProvider
		.state('app.main_admin.lender-details',{
			url: '/lender-details/:id',
			// abstract: true
			views:{
				'content@app': {
					templateUrl: 'app/main/admin/lender-details/lender-details.html',
					controller: 'LenderDetailsController',
					controllerAs: 'details'
				}
			},
			data: {
				role: 'Finnov'
			}
		})
		.state('app.main_admin.lender-details.partners',{
			url: '/partners',
			views:{
				'partnersView@app.main_admin.lender-details':{
					templateUrl:'app/main/admin/lender-details/partners-list/partners-list.html',
					controller: 'PartnersListController',
					controllerAs: 'pList'
				}
			},
			data: {
				role: 'Finnov',
				tabIndex: 0
			}
		})
		.state('app.main_admin.lender-details.users',{
			url: '/users',
			views:{
				'usersView@app.main_admin.lender-details':{
					templateUrl:'app/main/admin/lender-details/lender-users/lender-users.html',
					controller: 'LenderUsersController',
					controllerAs: 'lUsers'
				}
			},
			data: {
				role: 'Finnov',
				tabIndex: 1
			}
		})
	}
})();