/**
 * Created by rahul j jadav on 3/10/2017.
 */
(function () {
  'use strict';

  angular.module('app.main.lender.partner-details')
    .controller('PartnerDetailsController', PartnerDetailsController);

  PartnerDetailsController.$inject = ['$scope'];

  function PartnerDetailsController($scope){
    var partnerDetails = this;

    $scope.$on('$stateChangeSuccess', function(event, toState) {
      console.log(toState);
      partnerDetails.currentTab = toState.data.tabIndex;
    });
  }
})();
