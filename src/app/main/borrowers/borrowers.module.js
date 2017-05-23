(function(){
	'use strict';

	angular.module('app.main.borrowers',[])
	.config(config);

	config.$inject = ['$stateProvider'];

	function config($stateProvider){

		$stateProvider.state('app.main_borrower',{
			abstract : true,
			views : {
				'main@':{
					templateUrl: 'app/core/layout/content-only.html',
					controller: 'MainController',
					controllerAs: 'main'
				}
			}
		})
		.state('app.main_borrower.login',{
			url: '/borrower/login',
			views: {
				'content@app.main_borrower':{
					templateUrl: 'app/main/borrowers/login/login.html',
					controller: 'BorrowersLoginController',
					controllerAs: 'login',
				}
			}
		})
		.state('app.main_borrower.scan',{
			url: '/borrower/scan',
			views: {
				'content@app.main_borrower':{
					templateUrl: 'app/main/borrowers/scan/scan.html',
					controller: 'ScanDocumentsController',
					controllerAs: 'scan',
				}
			}
		})
		.state('app.main_borrower.qr',{
			url: '/qr',
			views: {
				'content@app.main_borrower':{
					templateUrl: 'app/main/borrowers/read-qr/read-qr.html',
					controller: 'ReadQrCodeController',
					controllerAs: 'qr',
				}
			}
		})
		.state('app.main_borrower.upload',{
			url: '/borrower/upload',
			views: {
				'content@app.main_borrower':{
					templateUrl: 'app/main/borrowers/upload/upload.html',
					controller: 'UploadDocumentsController',
					controllerAs: 'kyc',
				}
			}
		})
	}
})();