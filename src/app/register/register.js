/**
 * Created by UserPayMew on 16/6/6.
 */
(function () {
  'use strict';

  angular
    .module('paymewDistributor')
    .controller('RegisterController', RegisterController);

  /** @ngInject */
  function RegisterController($scope, $window, $log, $timeout,$location,api) {
    $scope.showCaptcha=false;
    $scope.captcha="http://piaojubao.h5.dev.willar.net/IdentifyingPicture?random=";
    $scope.regis=function(){
      if($scope.pwd == null){
        $window.alert("请输入密码");
      }else if($scope.pwda != $scope.pwd){
        $window.alert("两次密码必须一致");
      }else{
        $scope.showCaptcha=true;
      }
    }
    $scope.phoneCode=function(){
      var Verification={
        phone:$scope.user.phone
      }
      api.verification(Verification)
        .then(function (data) {
          $log.debug(data);
          //if (data.register == false) {
          //  $scope.Nowshow = true;
          //}
        }, function (errMsg) {
          $log.debug(errMsg);
          $window.alert(errMsg);
        });
    }
    $scope.reimg=function(){
      $scope.captcha="http://piaojubao.h5.dev.willar.net/IdentifyingPicture?random="+Math.random();
    }
    $scope.sub=function(){
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
            $location.path("/getSuccess");
          }
        }, function (errMsg) {
          $log.debug(errMsg);
          $scope.showCaptcha=false;
          $window.alert(errMsg);
        });
    }
  }
})();
