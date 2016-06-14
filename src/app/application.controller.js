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
    var paymew = $location.search().paymew || null;
    var f = $location.search().f || null;
    if (paymew) {
      $location.path("/getNowShared");
    }

    $log.debug('enter Application');
    $scope.user = {
      phone     : null,
      register  : false,
      activities: false,
      Qrcode    : null,
      getMoney  : null,
      paymew    : paymew,
      mypaymew  : null,
      f         : f
    };
    $log.debug('$scope.user: ', $scope.user);

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

    //加载自定义微信分享
    var postUrl = 'http://piaojubao.h5.dev.willar.net/Share';
    var url = encodeURIComponent($window.location.href);
    var params = {url: url};
    $http.post(postUrl, params)
      .then(function (rs) {
        $log.debug(rs);
        var res = rs.data;
        //$window.alert(JSON.stringify(res));

        //if (!res.errCode) {
        var _wxConfigArray = res;
        wx.config({
          debug    : false,
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
