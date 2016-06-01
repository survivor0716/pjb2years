/* global malarkey:false, moment:false */
(function () {
  'use strict';

  angular
    .module('paymewDistributor')
    .constant('malarkey', malarkey)
    .constant('moment', moment)

    .constant('apiConfig', {
      isTest: true,
      lbs_url : '',  //正式服务器域名
      test_url: ''  //测试服务器域名
      //以下为demo接口:getMExtend
      //getMExtend: '/getMExtend'
    });
})();
