(function() {
  'use strict'

  angular
  .module('SmashMeet.auth')
    .directive('smSign', sign);

    function sign() {
      var directive = {
        restrict: 'EA',
        templateUrl: './pages/SmashMeet.auth/templates/signin.html',
        controller: SignCtlr,
        controllerAs: 'vm',
        bindToController: true
      }
      return directive;
    }

    SignCtlr.$inject = [];

    function SignCtlr() {
      var vm = this;
      vm.user = {};

      vm.checkUserLog = function() {
        
      }
    }

})();
