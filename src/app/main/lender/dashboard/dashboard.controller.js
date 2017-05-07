/**
 * Created by rahul j jadav on 4/3/2017.
 */
(function () {
  'use strict';

  angular.module('app.main.lender')
    .controller('LenderDashboardController',LenderDashboardController);

  LenderDashboardController.$inject = ['data','api'];

  function LenderDashboardController(data, api) {
    var lDash = this;

    lDash.getDashBoardDetails = getDashBoardDetails;

    lDash.dashboardDetails = undefined;


    lDash.getDashBoardDetails();
    function getDashBoardDetails(){
    	data.get(api.getDashBoardDetails, {partnerId: null}, true)
    	.then(function(response){
    		
    		lDash.dashboardDetails = response.data;
    		console.log(lDash.dashboardDetails);
    	})
    	.catch();
    }
  }
})();
