(function () {
  'use strict';

  angular
    .module('paymewDistributor')
    .controller('GetNowController', GetNowController);

  /** @ngInject */
  function GetNowController($log, $scope, api, $window,$location) {
    $scope.Nowshow = false;
    $scope.isRegister = false;
    $scope.login = function () {
      var reg = /^(1[3,4,5,6,7,8]{1})+\d{9}$/;
      if (reg.test($scope.user.phone)) {
        var params = {
          phone: $scope.user.phone
        };
        //调用登录接口
        api.login(params)
          .then(function (data) {
            $log.debug(data);
            if (data.register == false) {
              $scope.Nowshow = true;
            }
          }, function (errMsg) {
            $log.debug(errMsg);
          });
      } else {
        $window.alert("请输入正确的手机号");
      }
    }
    $scope.goToSuccess = function(){
      $location.path("/register");
    }
  }
})();
