(function(){
	'use strict';

	angular.module('app.main.partner-backend')
	.controller('PartnerBorrowersController',PartnerBorrowersController);

	PartnerBorrowersController.$inject = ['data','api'];

	function PartnerBorrowersController(data, api){
		var borrowers = this;

		borrowers.getBorrowers = getBorrowers;

		borrowers.borrowersList = undefined;

		borrowers.getBorrowers();
		function getBorrowers(){
			data.get(api.getBorrowers, null, true)
			.then(function(response){
				console.log(response);
				borrowers.borrowersList = response.data.borrowers
			})
			.catch();
		}
	}
})();