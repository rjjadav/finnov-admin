/**
 * Created by rahul j jadav on 3/21/2017.
 */
(function () {
  'use strict';

  angular.module('app.main.lender.partner-details')
    .controller('NewUserController',NewUserController);

  NewUserController.$inject = ['$stateParams','toastr', 'data', 'api'];

  function NewUserController($stateParams, toastr, data, api) {
    console.log($stateParams);
    var newUser = this;

    newUser.createUser = createUser;

    function createUser(userDetails){
      userDetails.partnerId = $stateParams.partnerId;

      data.post(api.createPartnerLogin, userDetails, false)
        .then(function (response) {
          console.log(response);
          if(response.data.accountCreated == true){
            toastr.success('User Created successfully', 'Success');
          }else{
            toastr.error(response.data.message, 'Failure');
          }
        })
    }
  }
})();
