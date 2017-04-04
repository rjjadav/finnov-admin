/**
 * Created by rahul j jadav on 3/8/2017.
 */
(function () {
  'use strict';

  angular.module('app.main.admin')
    .controller('LenderListController', LenderListController);

  LenderListController.$inject = ['data','api'];

  function LenderListController(data, api) {
    var list = this;
    list.getAllLenders = getAllLenders;

    list.lendersList = undefined;

    list.getAllLenders();
    function getAllLenders(){
      data.post(api.getAllLenders, null, true)
        .then(function(response){
          console.log(response);
          if(response.data.lenders){
            list.lendersList = response.data.lenders
          }
        })

    }
  }
})();
