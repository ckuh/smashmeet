(function() {
  'use strict'

  angular
  .module('SmashMeet')
    .config(config);

    function config ($stateProvider, $urlRouterProvider, $httpProvider) {
      $stateProvider
        .state('home', {
          url: '/',
          auth: false,
          templateUrl: '../pages/SmashMeet.home/templates/home.html',
          controller: 'HomeController as vm'
        })
    }

})()
