/**
 * Created by rahul j jadav on 3/10/2017.
 */
(function () {
  'use strict';

  angular.module('app.main.lender.partner-details')
    .controller('PartnerDetailsController', PartnerDetailsController);

  PartnerDetailsController.$inject = ['$scope','$stateParams','data','api'];

  function PartnerDetailsController($scope, $stateParams,data, api){
    console.log($stateParams);
    var partnerDetails = this;

    partnerDetails.getPartnerDetail = getPartnerDetail;

    partnerDetails.partner = undefined;

    partnerDetails.getPartnerDetail();
    function getPartnerDetail(){
      data.get(api.getPartnerDetail, {partnerId : $stateParams.partnerId}, true)
      .then(function(response){
        console.log(response);
        if(response.data.partner){
          partnerDetails.partner = response.data.partner;
        }
      })
      .catch();
    }

    $scope.$on('$stateChangeSuccess', function(event, toState) {
      console.log(toState);
      partnerDetails.currentTab = toState.data.tabIndex;
    });
  }
})();
