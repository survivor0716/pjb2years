/**
 * Created by UserPayMew on 16/6/6.
 */
(function () {
  'use strict';

  angular
    .module('paymewDistributor')
    .controller('RegisterController', RegisterController);

  /** @ngInject */
  function RegisterController($scope, $window, $log, $timeout,$location) {
    $scope.showCaptcha=false;
    $scope.regis=function(){
      if($scope.pwd == null){
        $window.alert("请输入密码");
      }
      if($scope.pwda != $scope.pwd){
        $window.alert("两次密码必须一致");
      }else{
        api.register(params)
          .then(function (data) {
            $log.debug(data);
            //if (data.register == false) {
            //  $scope.Nowshow = true;
            //}
          }, function (errMsg) {
            $log.debug(errMsg);
          });
      }
    }

  }
})();
