/**
 * Created by UserPayMew on 16/6/6.
 */
(function () {
  'use strict';

  angular
    .module('paymewDistributor')
    .controller('GetSuccessController', GetSuccessController);

  /** @ngInject */
  function GetSuccessController($scope, $window, $log, $location) {
    $log.debug('enter getSuccess: ');
    $log.debug('$scope.user: ', $scope.user);
    if ($window.localStorage.user) {
      $scope.user = JSON.parse($window.localStorage.user);
    }

    $scope.disp = false;
    $scope.myVar = $scope.user.Qrcode;
    $scope.red = function () {
      $location.path("/list");
    };
    $scope.rule = function () {
      $location.path("/rule");
    };
    $scope.welfare = function () {
      $scope.disp = true;
    };
    $scope.closeMask = function () {
      $scope.disp = false;
    };
  }
})();
