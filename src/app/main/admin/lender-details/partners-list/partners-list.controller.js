(function(){
	'use strict';

	angular.module('app.main.admin.lender-details')
	.controller('PartnersListController',PartnersListController);

	PartnersListController.$inject = ['$mdDialog','$mdPanel','$stateParams','data','api'];

	function PartnersListController($mdDialog, $mdPanel, $stateParams, data, api){
		console.log($stateParams);
		var pList = this;

		pList.getPartnerByLender = getPartnerByLender;
		pList.addPartner = addPartner;
		pList.createPartnerUser = createPartnerUser;


		pList.partnersList = undefined;
		pList._mdPanel = $mdPanel;

		pList.getPartnerByLender();
		function getPartnerByLender(){
			data.get(api.getPartnerByLender,{lenderId : $stateParams.id}, true)
			.then(function(response){
				console.log(response);
				if(response.data.partners.length){
					pList.partnersList = response.data.partners;
				}
			})
			.catch();
		}

		function addPartner(ev){

 			console.log("added",ev.target);
			var position = pList._mdPanel.newPanelPosition()
			.relativeTo(ev.target)
			.addPanelPosition(pList._mdPanel.xPosition.ALIGN_END, pList._mdPanel.yPosition.BELOW);

 			var config = {
 				attachTo: angular.element(document.body),
 				controller: 'AttachPartnerController',
 				controllerAs: 'attach',
 				disableParentScroll: true,
 				templateUrl: 'app/main/admin/lender-list/attach-partner/attach-partner.html',
 				// hasBackdrop: true,
 				position: position,
 				trapFocus: true,
 				zIndex: 51,
 				clickOutsideToClose: true,
 				escapeToClose: true,
 				locals:{
 					lenderId: $stateParams.id
 				}
 			};
 			pList._mdPanel.open(config);
 		}


 		function createPartnerUser(ev, partnerId){
 			console.log(partnerId);
 			$mdDialog.show({
				controller: 'CreatePartnerUserController',
				controllerAs: 'user',
				templateUrl: 'app/main/admin/lender-details/create-partner-user/create-partner-user.html',
				parent: angular.element(document.body),
				targetEvent: ev,
				clickOutsideToClose:true,
				fullscreen: true, // Only for -xs, -sm breakpoints.
				locals:{
					lenderId : $stateParams.id,
					partnerId: partnerId
				}
			})
			.then(function(accountCreated) {
				// $scope.status = 'You said the information was "' + answer + '".';
			}, function() {
				// $scope.status = 'You cancelled the dialog.';
			});
 		}

	}
})();