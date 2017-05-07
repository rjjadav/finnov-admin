/**
 * Created by rahul j jadav on 3/9/2017.
 */
(function () {
	'use strict';

	angular.module('app.main.lender')
		.controller('ListPartnerController', ListPartnerController);

	ListPartnerController.$inject=['$mdDialog', 'data', 'api'];

	function ListPartnerController($mdDialog, data, api){
		var list = this;
		list.getAllPartner = getAllPartner;
		list.activatePartner = activatePartner;

		list.getAllPartner();
		function getAllPartner(){
			data.get(api.getAllPartner, null, true)
			.then(function (response) {
				console.log(response);
				if(response.data.partners){
					list.partnerList = response.data.partners;
				}
			});
		}

		function activatePartner(partner) {
			data.post(api.makePartnerActive, {partnerId: partner.id}, false)
			.then(function(response){
				console.log(response);
				if(response.data.active){
					partner.active = true;
				}
			})
		}
	}
})();
