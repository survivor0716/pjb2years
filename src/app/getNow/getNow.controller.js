(function () {
  'use strict';

  angular
    .module('paymewDistributor')
    .controller('GetNowController', GetNowController);

  /** @ngInject */
  function GetNowController($log, $scope, api, $window, $location) {

    $scope.Nowshow = false;

    $scope.isRegister = false;

    $scope.login = function () {
      var reg = /^(1[3,4,5,6,7,8]{1})+\d{9}$/;
      if (reg.test($scope.user.phone)) {
        var params = {
          phone: $scope.user.phone
        };
        $log.debug(params);
        //调用登录接口
        api.login(params)
          .then(loginSuccess, function (errMsg) {
            $log.debug(errMsg);
          });
        //loginSuccess();
      } else {
        $window.alert("请输入正确的手机号");
      }
    }

    $scope.goToSuccess = function () {
      if ($scope.user.register) {
        $location.path("/getSuccess");
      } else {
        $location.path("/register");
      }
    }

    function loginSuccess(data) {
      //var data = {
      //  register: true,
      //  activities: false
      //}
      $log.debug(data);
      $scope.Nowshow = true;
      $scope.user.register = data.register;
      $scope.user.activities = data.activities;
      if (!$scope.user.register) {//如果是新用户的话

      } else {//如果是老用户
        if ($scope.user.activities) {
          $scope.isRegister=true;
        }
      }

    }
  }
})();
