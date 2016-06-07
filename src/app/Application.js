/**
 * Created by UserPayMew on 16/6/7.
 */
(function () {
  'use strict';

  angular
    .module('paymewDistributor')
    .controller('ApplicationController', ApplicationController);

  /** @ngInject */
  function ApplicationController($scope, $window, $log, $timeout,$location,api) {
    $scope.user={
      phone:null,
      parameter:null,
    }
  }
})();
