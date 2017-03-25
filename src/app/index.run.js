(function() {
  'use strict';

  angular
    .module('finnovAdmin')
    .run(runBlock);

  /** @ngInject */
  function runBlock($rootScope, $state, UserService, CONST) {
    // UserService.getUserType()
    //   .then(function (response) {
    //     console.log(response);
    //     if(response.status === 200){
    //       $rootScope.loggedIn = true;
    //       $rootScope.role = response.data.accountType;
    //       $rootScope.name = response.data.name;
    //     }else{
    //       $rootScope.loggedIn = false;
    //       $state.go('app.main_auth.login');
    //     }
    //
    //   });

    $rootScope.$on('$stateChangeStart', function (event, toState) {
      console.log(toState);
      if($rootScope.role && toState.data && toState.data.role !== $rootScope.role){
        event.preventDefault();
        $state.go(CONST.defaultRedirect[$rootScope.role]);
      }

      if($rootScope.role && toState.name === 'app.main_auth.login'){
        event.preventDefault();
        $state.go(CONST.defaultRedirect[$rootScope.role]);
      }
    })
  }

})();
