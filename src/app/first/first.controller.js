/**
 * Created by UserPayMew on 16/6/6.
 */
(function () {
  'use strict';

  angular
    .module('paymewDistributor')
    .controller('FirstController', FirstController);

  /** @ngInject */
  function FirstController($scope, $window, $log, $timeout,$location) {
    //Angular Animations: ng-view
    $scope.pageClass = 'page-first';

    $scope.tosec=function(){
      $location.path("/home");
    }


  }
})();
