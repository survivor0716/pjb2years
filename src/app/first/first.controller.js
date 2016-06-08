/**
 * Created by UserPayMew on 16/6/6.
 */
(function () {
  'use strict';

  angular
    .module('paymewDistributor')
    .controller('FirstController', FirstController);

  /** @ngInject */
  function FirstController($scope, $window, $log, $location, $timeout) {
    //Angular Animations: ng-view
    $scope.pageClass = 'page-first';

    $timeout(function () {
      $location.path('/home');
    }, 1000)
  }
})();
