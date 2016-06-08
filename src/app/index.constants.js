/* global malarkey:false, moment:false */
(function () {
  'use strict';

  angular
    .module('paymewDistributor')
    .constant('malarkey', malarkey)
    .constant('moment', moment)

    .constant('apiConfig', {
      isDebug     : true,
      lbs_url     : '',  //正式服务器域名
      test_url    : 'http://piaojubao.h5.dev.willar.net',  //测试服务器域名
      //以下为接口名称
      login       : '/Login',
      register    : '/Register',
      verification: '/Verification',
      captcha     : '/IdentifyingPicture'
    })
    .constant('huboApi', {
      isDebug     : true,
      lbs_url     : '',  //正式服务器域名
      test_url    : 'http://piaojubao.h5.dev.willar.net',  //测试服务器域名
      //以下为接口名称
      login       : '/join',
      register    : '/register',
      verification: '/send',
      captcha     : '/captcha'
    })
})();
