(function(){
	'use strict';

	angular.module('app.main.borrowers')
	.controller('ScanDocumentsController', ScanDocumentsController);

	ScanDocumentsController.$inject = ['data','api'];

	function ScanDocumentsController(data, api){
		var scan = this;
		scan.genrateQrImage = genrateQrImage;
		scan.qrImage = undefined;

		scan.genrateQrImage();
		function genrateQrImage(){
			data.get(api.genrateQrImage, null, false)
			.then(function(response){

				if(response.data && response.data.qrImagePath){
					scan.qrImage = api.imagePath + response.data.qrImagePath;

				}
				console.log(scan.qrImage);
			})
			.catch();	
		}
	}
})();