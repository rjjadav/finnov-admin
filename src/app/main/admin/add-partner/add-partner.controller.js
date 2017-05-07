/**
 * Created by rahul j jadav on 3/9/2017.
 */
(function () {
  'use strict';

  angular.module('app.main.lender')
    .controller('AddPartnerController', AddPartnerController);

  AddPartnerController.$inject= ['toastr','data','api'];

  function AddPartnerController(toastr, data, api) {
    var add = this;
    add.addPartner = addPartner;

    function addPartner(partner) {
      data.post(api.createPartner, partner, false)
        .then(function (response) {
          console.log(response);
          if(response.data.partnerCreated){
            toastr.success('Partner Added', 'Success');
          }else{
            toastr.error('Failure Adding Partner', 'Failure');
          }
        })
        .catch(function(error){
          toastr.error('Failure Adding Partner', 'Failure');
        })
    }
  }
})();
