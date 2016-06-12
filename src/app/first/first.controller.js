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

    //$scope.arrGetImg = [];
    //
    //for (var i = 1; i <= 8; i++) {
    //
    //  var obj = {
    //    src: "assets/getImg/" + i + "@2x.png",
    //    class: "img" + i + " animated",
    //    random: randomAnimate(),
    //    active: false
    //  };
    //
    //
    //  $scope.arrImg.push(obj);
    //
    //  (function (obj) {
    //    $timeout(function () {
    //      obj.active = true;
    //      //$log.debug(obj);
    //      //$log.debug('active = true');
    //    }, i * 500);
    //  })(obj);
    //
    //}
    //
    //$timeout(function () {
    //  $scope.logoActive = true;
    //  //$log.debug(obj);
    //  //$log.debug('active = true');
    //}, 24 * 500);

    $scope.tosec=function(){
      $location.path("/home");
    }


  }
})();
