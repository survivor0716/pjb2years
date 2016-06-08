/**
 * Created by UserPayMew on 16/6/6.
 */
(function () {
  'use strict';

  angular
    .module('paymewDistributor')
    .controller('ListController', ListController);

  /** @ngInject */
  function ListController($scope, $window, $log, $timeout) {
    $scope.lists = [];
    for(var i = 0; i < 5; i++) {
      var data = {
        name: '唯一****',
        num: 8
      };
      $scope.lists.push(data);
    }
  }
})();
