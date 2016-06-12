/**
 * Created by UserPayMew on 16/6/7.
 */
(function () {
  'use strict';

  angular
    .module('paymewDistributor')
    .controller('ApplicationController', ApplicationController);

  /** @ngInject */
  function ApplicationController($scope, $log, $location, $window, $http, wxshare) {
    var paymew = $location.search().paymew || '';
    var f = $location.search().f || '';
    if (paymew) {
      $location.path("/getNowShared");
    }
    if ($window.localStorage.user) {
      $scope.user = JSON.parse($window.localStorage.user);
    } else {
      $scope.user = {
        phone   : null,
        Qrcode  : null,
        getMoney: null,
        paymew  : paymew,
        f       : f
      };
    }
    $log.debug($scope.user);

    $scope.musicState = true;
    $scope.musicSrc = 'assets/images/sound_on@2x.png';
    $scope.toggleMusic = function () {
      var audio = $window.document.getElementById("bgAudio");
      if (audio.paused) {
        audio.play();
        $scope.musicState = true;
        $scope.musicSrc = 'assets/images/sound_on@2x.png';
      }
      else {
        audio.pause();
        $scope.musicState = false;
        $scope.musicSrc = 'assets/images/sound_off@2x.png';
      }
      $log.debug($scope.muscieState);
    };

    var postUrl = 'http://piaojubao.h5.dev.willar.net/Share';
    var url = encodeURIComponent($window.location.href);
    var params = {url: url};
    $http.post(postUrl, params)
      .then(function (rs) {
        //$window.alert(JSON.stringify(rs));
        var res = rs.data;

        //if (!res.errCode) {
        var _wxConfigArray = res;
        wx.config({
          debug    : true,
          appId    : _wxConfigArray.appId,
          timestamp: parseInt(_wxConfigArray.timestamp),
          nonceStr : _wxConfigArray.nonceStr,
          signature: _wxConfigArray.signature,
          jsApiList: [
            // 所有要调用的 API 都要加到这个列表中
            "onMenuShareTimeline",
            "onMenuShareAppMessage"
          ]
        });
        wxshare.invokeWXShare($scope.user);
        //} else {
        //  $window.alert(res.errMsg);
        //}
      });
  }
})();
