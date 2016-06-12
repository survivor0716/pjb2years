/**
 * Created by UserPayMew on 16/6/7.
 */
(function () {
  'use strict';

  angular
    .module('paymewDistributor')
    .controller('ApplicationController', ApplicationController);

  /** @ngInject */
  function ApplicationController($scope, $log, $location, $window) {
    var paymew = $location.search().paymew || '';
    var f = $location.search().f || '';
    if (paymew) {
      $location.path("/getNowShared");
    }
    $scope.user = {
      phone   : null,
      Qrcode  : null,
      getMoney: null,
      paymew  : paymew,
      f       : f
    };
    $log.debug($scope.user);

    $scope.toggleMusic = function () {
      var audio = $window.document.getElementById("bgAudio");
      if (audio.paused) {
        audio.play();
      }
      else {
        audio.pause();
      }
    };
  }
})();
