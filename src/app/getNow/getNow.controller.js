(function() {
  'use strict';

  angular
    .module('paymewDistributor')
    .controller('GetNowController', GetNowController);

  /** @ngInject */
  function GetNowController($log, $scope, api) {
    //调用登录接口
    api.login()
      .then(function (data) {
        $log.debug(data);
      }, function (errMsg) {
        $log.debug(errMsg);
      });
  }
})();
