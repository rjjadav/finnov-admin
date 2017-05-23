(function(){
	'use strict';

	angular.module('app.main.borrowers')
	.controller('ReadQrCodeController', ReadQrCodeController);

	ReadQrCodeController.$inject = ['$scope','$cookies', '$state'];

	function ReadQrCodeController($scope, $cookies, $state){
		var qr = this;
		// $scope.start = function() {
			$scope.cameraRequested = true;
		// }

		$scope.processURLfromQR = function (url) {
			$scope.url = url;
			$scope.cameraRequested = false;
			$cookies.put('accessToken',url);
			$state.go('app.main_borrower.upload');
		}

	}
})();