(function(){
	'use strict';

	angular.module('app.main.lender.partner-details')
	.controller('LoanRequestListFiltersController',LoanRequestListFiltersController);


	LoanRequestListFiltersController.$inject = ['mdPanelRef'];


	function LoanRequestListFiltersController(mdPanelRef){
		var filters = this;

		filters.close = close;
		filters.apply = apply;

		function close(){
			mdPanelRef.close();
		}


		function apply(){
			
		}

	}
})();