(function(){
	'use strict';

	angular.module('app.main.partner-backend')
	.controller('PartnerBorrowersController',PartnerBorrowersController);

	PartnerBorrowersController.$inject = ['$scope','$mdDialog','data','api'];

	function PartnerBorrowersController($scope, $mdDialog, data, api){

		var borrowers = this;

		borrowers.getBorrowers = getBorrowers;
		borrowers.uploadDocumentDialog = uploadDocumentDialog;
		borrowers.genrateQrImage = genrateQrImage;
		borrowers.qrImage = undefined;

		borrowers.getBorrowers();
		function getBorrowers(){
			data.get(api.getBorrowers, null, true)
			.then(function(response){
				console.log(response);
				borrowers.borrowersList = response.data.borrowers
			})
			.catch();
		}


		function uploadDocumentDialog(ev, borrower){
			$mdDialog.show({
				templateUrl: 'app/main/partner-backend/upload-document/upload-document.html',
				controller: UploadDocumentController,
				controllerAs: 'uploadDoc',
				parent: angular.element(document.body),
				targetEvent: ev,
				clickOutsideToClose:true,
				fullscreen: true, // Only for -xs, -sm breakpoints.
				locals:{
					borrower : borrower 
				}
			})
			.then(function(answer) {
				// $scope.status = 'You said the information was "' + answer + '".';
			}, function() {
				// $scope.status = 'You cancelled the dialog.';
			});


			function UploadDocumentController($mdDialog, toastr, data, api, borrower){
				console.log(borrower.custCode);
				var uploadDoc = this;
				uploadDoc.cancel = cancel;
				uploadDoc.uploadBankStatement = uploadBankStatement;

				uploadDoc.loading = false;

				function cancel(){
					$mdDialog.cancel();
				}

				function uploadBankStatement(bankStatement, bankName, accountType){
					uploadDoc.loading = true;
					var statement = {
						bankStatement : bankStatement,
						custCode: borrower.custCode,
						bankName : bankName,
						accountType: accountType
					}

					data.upload(api.uploadBankStatement, statement, false)
					.then(function(response){
						console.log(response);
						if(response.data > 0){
							toastr.success('Bank statement uploaded','Success');
							$mdDialog.hide();
						}
						uploadDoc.loading = false;
					})
					.catch();
				}
			}
		}

		function genrateQrImage(){
			data.get(api.genrateQrImage, null, false)
			.then(function(response){

				if(response.data && response.data.qrImagePath){
					borrowers.qrImage = api.imagePath + response.data.qrImagePath;

				}
				console.log(borrowers.qrImage);
			})
			.catch();	
		}
		borrowers.genrateQrImage();
		$scope.start = function() {
			$scope.cameraRequested = true;
		}

		$scope.processURLfromQR = function (url) {
			$scope.url = url;
			$scope.cameraRequested = false;
			console.log($scope.url);
		}
	}
})();