/**
 * Created by UserPayMew on 16/6/6.
 */
(function () {
  'use strict';

  angular
    .module('paymewDistributor')
    .controller('RegisterController', RegisterController);

  /** @ngInject */
  function RegisterController($scope, $window, $log, $location, api, wxshare) {
    $log.debug('enter register: ');
    $log.debug('$scope.user: ', $scope.user);
    if ($window.localStorage.user) {
      $scope.user = JSON.parse($window.localStorage.user);
    }

    var apiUrl = $location.absUrl().split('/web');
    $log.debug(apiUrl);

    $scope.showCaptcha = false;
    $scope.captcha = apiUrl[0] + "/IdentifyingPicture?random=" + Math.random();

    $scope.regis = function () {
      if (!$scope.verification) {
        $window.alert("请先获取短信验证码");
        return;
      }
      if ($scope.pwd == null) {
        $window.alert("请输入密码");
      } else if ($scope.pwda != $scope.pwd) {
        $window.alert("两次密码必须一致");
      } else {
        $scope.showCaptcha = true;
        $scope.reimg();
      }
    };

    $scope.phoneCode = function () {
      var Verification = {
        phone: $scope.user.phone
      };
      api.verification(Verification)
        .then(function (data) {
          $log.debug(data);
          $window.alert("手机验证码发送成功");
          //if (data.register == false) {
          //  $scope.Nowshow = true;
          //}
        }, function (errMsg) {
          $log.debug(errMsg);
          $window.alert(errMsg);
        });
    };

    $scope.reimg = function () {
      $scope.captcha = apiUrl[0] + "/IdentifyingPicture?random=" + Math.random();
    };
    $scope.sub = function () {
      if(!$scope.Identifying) {
        $window.alert('请输入图形验证码');
        return;
      }
      var sub_data = {
        phone       : $scope.user.phone,
        verification: $scope.verification,
        password    : $scope.pwd,
        Identifying : $scope.Identifying,
        paymew      : $scope.user.paymew,
        f           : $scope.user.f
      };
      $log.debug(sub_data);
      api.register(sub_data)
        .then(function (data) {
          $log.debug(data);
          if (data.register == true) {
            $scope.user.Qrcode = data.Qrcode;
            $scope.user.mypaymew = data.paymew;
            $window.localStorage.user = JSON.stringify($scope.user);
            wxshare.invokeWXShare($scope.user);
            $location.path("/getSuccess");
          }
        }, function (errMsg) {
          $log.debug(errMsg);
          $scope.showCaptcha = false;
          $window.alert(errMsg);
        });
    }
  }
})();
