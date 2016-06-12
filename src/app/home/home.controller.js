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
      var msg = ["fadeIn", "bounceInDown", "bounceInUp", "bounceInLeft", "bounceInRight", "bounceInDown", "bounceIn", "fadeInUp", "fadeInDown", "fadeInLeft", "fadeInRight"];
      var random1 = msg[Math.floor(Math.random() * msg.length)];
      return random1;
    }

    $scope.arrImg = [];

    for (var i = 1; i < 24; i++) {

      var obj = {
        src: "assets/images/" + i + "@2x.png",
        class: "img" + i + " animated",
        random: randomAnimate(),
        active: false
      };

      if (i == 24) {
        obj.src = "assets/images/logo@2x.png";
      }

      $scope.arrImg.push(obj);

      (function (obj) {
        $timeout(function () {
          obj.active = true;
          //$log.debug(obj);
          //$log.debug('active = true');
        }, i * 500);
      })(obj);

    }

    $timeout(function () {
      $scope.logoActive = true;
      //$log.debug(obj);
      //$log.debug('active = true');
    }, 24 * 500);

    $scope.gothird = function () {
      if ($scope.user.paymew) {
        $location.path("/getNowShared");
      } else {
        $location.path("/getNow");
      }
    }
  }
})();
