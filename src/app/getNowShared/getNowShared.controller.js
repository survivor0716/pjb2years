(function() {
  'use strict';

  angular
    .module('paymewDistributor')
    .controller('GetNowSharedController', GetNowSharedController);

  /** @ngInject */
  function GetNowSharedController($timeout, webDevTec, toastr,$scope,$window) {

    $scope.gor = function () {
     if($scope.user.phone=""){
        $window.alert(1);
     }
    }

    //function loginSuccess(data) {
    //  $log.debug(data);
    //  $scope.Nowshow = true;
    //  $scope.user.register = data.register;
    //  $scope.user.activities = data.activities;
    //  if (!$scope.user.register) {//如果是新用户的话
    //
    //  } else {//如果是老用户
    //    if ($scope.user.activities) {
    //      $scope.isRegister=true;
    //    }
    //  }
    //
    //}

  }
})();
