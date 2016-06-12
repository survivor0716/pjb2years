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

    function randomphoneOne() {

      var phoneLeft = ["13", "14","15","16", "17", "18"];

      var random2 = phoneLeft[Math.floor(Math.random() * phoneLeft.length)];

      return random2;

    }

    function randomphoneTwo() {

      var random3 = Math.floor(Math.random() * 10);

      return random3;

    }

    function randomphoneThree() {

      var phoneBottom = ["8", "16"];

      var random4 = phoneBottom[Math.floor(Math.random() * phoneBottom.length)];

      return random4;

    }

    $scope.phoneNumber = [];

    for (var x = 1; x <= 5; x++) {

      var randomphoneN=randomphoneOne()+randomphoneTwo()+"xxxx"+randomphoneTwo()+randomphoneTwo()+randomphoneTwo()+randomphoneTwo();

      var obj = {
        phone:randomphoneN,
        randomThree:randomphoneThree()
      };

      $scope.phoneNumber.push(obj);

    }

    $log.debug($scope.phoneNumber);
  }
})();
