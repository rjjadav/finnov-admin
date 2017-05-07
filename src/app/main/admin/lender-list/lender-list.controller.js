/**
 * Created by rahul j jadav on 3/8/2017.
 */
 (function () {
 	'use strict';

 	angular.module('app.main.admin')
 	.controller('LenderListController', LenderListController);

 	LenderListController.$inject = ['$mdPanel','data','api'];

 	function LenderListController($mdPanel, data, api) {
 		var list = this;
 		list.getAllLenders = getAllLenders;
 		list.addPartner = addPartner;

 		list.lendersList = undefined;
 		list._mdPanel = $mdPanel;


 		list.getAllLenders();
 		function getAllLenders(){
 			data.post(api.getAllLenders, null, true)
 			.then(function(response){
 				console.log(response);
 				if(response.data.lender){
 					list.lendersList = response.data.lender;
 				}
 			})

 		}

 		function addPartner(ev, lenderId){

 			console.log("added",ev.target);
			var position = list._mdPanel.newPanelPosition()
			.relativeTo(ev.target)
			.addPanelPosition(list._mdPanel.xPosition.ALIGN_END, list._mdPanel.yPosition.BELOW);

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
 					lenderId: lenderId
 				}
 			};

 			list._mdPanel.open(config);

 		}
 	}
 })();
