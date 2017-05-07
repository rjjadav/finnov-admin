(function(){
	'use strict';

	angular.module('app.main.admin')
	.controller('AttachPartnerController',AttachPartnerController);

	AttachPartnerController.$inject = ['mdPanelRef','toastr','api','data', 'lenderId'];

	function AttachPartnerController(mdPanelRef, toastr, api, data, lenderId){
		console.log(lenderId);
		var attach = this;

		attach.close = close;
		attach.getAllPartner = getAllPartner;
		attach.save = save;

		attach.partnerList = undefined;

		attach.getAllPartner();
		function close(){
			if (mdPanelRef) mdPanelRef.close();
		}


		function getAllPartner(){
			data.get(api.getAllPartner, null, true)
			.then(function (response) {
				console.log(response);
				if(response.data.partners){
					attach.partnerList = response.data.partners;
				}
			});
		}


		function save(partner){
			console.log(JSON.parse(partner));
			var obj = {
				lenderId : lenderId,
				partnerId : JSON.parse(partner).id,
				partnerName: JSON.parse(partner).name
			}
			data.post(api.attachPartner,obj, false)
			.then(function(response){
				console.log(response);
				if(response.data.partnerAttached){
					toastr.success('Partner Attached','Success')
				}
				if (mdPanelRef) mdPanelRef.close();
			})
		}
	}
})();