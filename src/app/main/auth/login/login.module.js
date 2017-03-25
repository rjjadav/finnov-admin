/**
 * Created by rahul j jadav on 3/8/2017.
 */
(function(){
  'use strict';

  angular.module('app.main.auth.login',[])
    .config(config);

  /** ngInject */
  function config($stateProvider){
    console.log("login asdas")
    $stateProvider.state('app.main_auth.login',{
      url : '/auth/login',
      views: {
        'content@app.main_auth': {
          templateUrl:	'app/main/auth/login/login.html',
          controller:		'LoginController',
          controllerAs:	'login'
        }
      }
    })
  }
})();
