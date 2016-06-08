/**
 * Created by UserPayMew on 16/6/6.
 */
(function () {
  'use strict';

  angular
    .module('paymewDistributor')
    .controller('RegisterController', RegisterController);

  /** @ngInject */
  function RegisterController($scope, $window, $log, $timeout, $location, api) {
    $scope.showCaptcha = false;
    $scope.captcha = "http://piaojubao.h5.dev.willar.net/IdentifyingPicture?random=";
    $scope.regis = function () {
      if ($scope.pwd == null) {
        $window.alert("请输入密码");
      } else if ($scope.pwda != $scope.pwd) {
        $window.alert("两次密码必须一致");
      } else {
        $scope.showCaptcha = true;
      }
    };
    $scope.phoneCode = function () {
      var Verification = {
        phone: $scope.user.phone
      };
      api.verification(Verification)
        .then(function (data) {
          $log.debug(data);
          $window.alert('短信验证码已发送');
        }, function (errMsg) {
          $log.debug(errMsg);
          $window.alert(errMsg);
        });
    };
    $scope.reimg = function () {
      $scope.captcha = "http://piaojubao.h5.dev.willar.net/IdentifyingPicture?random=" + Math.random();
    };
    $scope.sub = function () {
      $scope.showCaptcha = false;
      var sub_data = {
        phone   : $scope.user.phone,
        smsCode : $scope.verification,
        password: $scope.pwd,
        imgCode : $scope.Identifying,
        paymew  : null,
        f       : null
      };
      $log.debug(sub_data);
      api.register(sub_data)
        .then(function (data) {
          $log.debug(data);
          $scope.user.balance = data.balance;
          $scope.user.shareUrl = data.shareUrl;
          $location.path('/getSuccess');

        }, function (errMsg) {
          $log.debug(errMsg);
          $window.alert(errMsg);

        });
    }
  }
})();
