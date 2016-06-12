(function () {
  'use strict';

  angular
    .module('paymewDistributor')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController($scope, $window, $log, $timeout, $location) {
    //Angular Animations: ng-view
    $scope.pageClass = 'page-home';

    //var random1 = msg[Math.floor(Math.random() * msg.length)];
    function randomAnimate() {
      var msg = [
        //"fadeIn",
        "bounceInUp",
        "bounceInDown",
        "bounceInLeft",
        "bounceInRight",
        //"bounceIn"
        "fadeInUp",
        "fadeInDown",
        "fadeInLeft",
        "fadeInRight"
      ];
      var random1 = msg[Math.floor(Math.random() * msg.length)];
      return random1;
    }

    $scope.arrImg1 = [];
    $scope.arrImg2 = [];

    for (var i = 1; i <= 10; i++) {

      var obj = {
        src   : "assets/images/" + i + "@2x.png",
        class : "animated " + randomAnimate() + " img" + i ,
        active: false
      };

      $scope.arrImg1.push(obj);

      (function (obj) {
        $timeout(function () {
          obj.active = true;
          //$log.debug(obj);
          //$log.debug('active = true');
        }, i * 1000);
      })(obj);

    }
    for (var j = 13; j <= 24; j++) {

      var obj = {
        src: "assets/images/" + j + "@2x.png",
        class: "img" + j + " animated",
        random: randomAnimate(),
        active: false
      };

      if (j == 24) {
        obj.src = "assets/images/logo@2x.png";
      }

      $scope.arrImg2.push(obj);

      (function (obj) {
        $timeout(function () {
          obj.active = true;
          //$log.debug(obj);
          //$log.debug('active = true');
        }, j * 1000);
      })(obj);

    }

    $timeout(function () {
      $scope.logoActive = true;
      //$log.debug(obj);
      //$log.debug('active = true');
    }, 500);

    $scope.gothird = function () {
      if ($scope.user.paymew) {
        $location.path("/getNowShared");
      } else {
        $location.path("/getNow");
      }
    }
  }
})();
