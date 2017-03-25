/**
 * Created by rahul j jadav on 3/9/2017.
 */
(function () {
  'use strict';

  angular.module('app.core')
    .factory('UserService', UserService);

  UserService.$inject=['data','api'];

  function UserService(data, api) {
    var config = {
      getUserType: getUserType
    }

    return config;

    function getUserType() {
      return data.get(api.getUserType, undefined, true);
    }
  }
})();
