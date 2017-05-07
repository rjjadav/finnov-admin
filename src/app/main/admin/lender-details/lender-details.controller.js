/**
 * Created by rahul j jadav on 3/8/2017.
 */
(function () {
	'use strict';

	angular.module('app.main.admin.lender-details')
		.controller('LenderDetailsController', LenderDetailsController);

	LenderDetailsController.$inject=['$scope','$stateParams','toastr','data','api'];

	function LenderDetailsController($scope, $stateParams, toastr, data, api) {
		console.log($stateParams);
		var details = this;

		$scope.$on('$stateChangeSuccess', function(event, toState) {
			console.log(toState);
			details.currentTab = toState.data.tabIndex;
		});

		// details.addLenderDetails = addLenderDetails;

		// function addLenderDetails(lenderDetails){
		// 	lenderDetails.accountId = $stateParams.id;

		// 	data.post(api.addLenderDetails, lenderDetails, false)
		// 	  .then(function (response) {
		// 	    console.log(response);
		// 	    if(response.data.lenderDetailSaved){
		// 	      toastr.success('Lender Details Added', 'Success');
		// 	    }else{
		// 	      toastr.error(response.data.message, 'Failure');
		// 	    }
		// 	  })

		// }
	}
})();
