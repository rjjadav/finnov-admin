(function(){
	'use strict';

	angular.module('app.main.partner-backend')
	.controller('PartnerBorrowersController',PartnerBorrowersController);

	PartnerBorrowersController.$inject = ['$scope','$mdDialog','data','api'];

	function PartnerBorrowersController($scope, $mdDialog, data, api){
		var borrowers = this;

		borrowers.getBorrowers = getBorrowers;
		borrowers.uploadDocumentDialog = uploadDocumentDialog;
		
		borrowers.getBorrowers();
		function getBorrowers(){
			data.get(api.getBorrowers, null, true)
			.then(function(response){
				console.log(response);
				borrowers.borrowersList = response.data.borrowers
			})
			.catch();
		}


		function uploadDocumentDialog(ev){
			$mdDialog.show({
				controller: function(){},
				templateUrl: 'app/main/partner-backend/upload-document/upload-document.html',
				parent: angular.element(document.body),
				targetEvent: ev,
				clickOutsideToClose:true,
				fullscreen: true // Only for -xs, -sm breakpoints.
			})
			.then(function(answer) {
				// $scope.status = 'You said the information was "' + answer + '".';
			}, function() {
				// $scope.status = 'You cancelled the dialog.';
			});
		}

		$scope.start = function() {
			$scope.cameraRequested = true;
		}

		$scope.processURLfromQR = function (url) {
			$scope.url = url;
			$scope.cameraRequested = false;
		}
	}
})();