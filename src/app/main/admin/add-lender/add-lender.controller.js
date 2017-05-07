/**
 * Created by rahul j jadav on 3/8/2017.
 */
(function () {
  'use strict';

  angular.module('app.main.admin')
    .controller('AddLenderController', AddLenderController)

  AddLenderController.$inject = ['$scope','toastr','data','api'];

  function AddLenderController($scope, toastr, data, api){
    var lender = this;
    lender.addLender = addLender;
    lender.loading = false;

    function addLender(lenderObj){
      lender.loading = true;
      data.post(api.addLender, lenderObj, false)
        .then(function(response){
          console.log(response);
          if(response.data.lenderDetailSaved){
            toastr.success('Lender Added', 'Success');
            lenderObj = undefined;
            $scope.lenderDetailsForm.$valid = true;
          }else{
            toastr.error(response.data.message, 'Failure')
          }
          lender.loading = false;
        })
    }
  }
})();
