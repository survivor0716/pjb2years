/**
 * Created by UserPayMew on 16/6/6.
 */
(function () {
  'use strict';

  angular
    .module('paymewDistributor')
    .controller('GetSuccessController', GetSuccessController);

  /** @ngInject */
  function GetSuccessController($scope,$location, $window, $log, $timeout) {
    $log.debug($scope.user.Qrcode);
    $scope.disp = false;
    $scope.myVar = $scope.user.Qrcode;
    $scope.red=function() {
      $location.path("/list");
    }
    $scope.rule=function() {
      $location.path("/rule");
    }
    $scope.welfare=function(){
      $scope.disp = true;
    }
    $scope.closeMask=function(){
      $scope.disp = false;
    }
  }
})();
