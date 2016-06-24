(function() {
  'use strict'

  angular
  .module('SmashMeet')
    .config(config);

    function config ($stateProvider, $urlRouterProvider, $httpProvider) {
      $stateProvider
        .state('home', {
          url: '/home',
          auth: false,
          templateUrl: '../pages/SmashMeet.home/templates/home.html',
          controller: 'HomeController as vm'
        })
        .state('auth', {
          url: '/',
          auth: false,
          templateUrl: '../pages/SmashMeet.auth/templates/auth.html',
          controller: 'AuthController as vm'
        })

      $urlRouterProvider
        .otherwise('/');
    }

})()
