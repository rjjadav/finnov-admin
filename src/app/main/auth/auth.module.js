/**
 * Created by rahul j jadav on 3/8/2017.
 */
(function () {
  'use strict'

  angular.module('app.main.auth',['app.main.auth.login'])
    .config(config);

  config.$inject = ['$stateProvider'];

  function config($stateProvider){
    // $stateProvider
    //   .state('app.main_auth_login',{
    //     url: '/login',
    //     views:{
    //       'content@app':{
    //         templateUrl: 'app/main/auth/login/login.html',
    //         controller: 'LoginController',
    //         controllerAs: 'login'
    //       }
    //     }
    //   })
    $stateProvider.state('app.main_auth',{
      abstract : true,
      views : {
        'main@':{
          templateUrl: 'app/core/layout/content-only.html',
          controller: 'MainController',
          controllerAs: 'main'
        }
      }
    })
  }
})();
