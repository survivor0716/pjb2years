'use strict';

angular.module('paymewDistributor')
  .factory('api', function ($log, $http, $q, $window, apiConfig, huboApi) {
    // Service logic
    function requestSuccess(response) {
      if (typeof response.data === 'object') {
        var data = response.data;
        $log.debug(data);
        if (!data.errCode) {
          $log.debug(data);
          return $q.resolve(data.data);
        } else {
          return $q.reject(data.errMsg);
        }
      } else {
        return $q.reject(JSON.stringify(response));
      }
    }

    function requestFail(response) {
      return $q.reject(JSON.stringify(response));
    }

    function request(url, obj) {
      var obj = obj || {};
      return function (p) {
        var params = p || {};
        //$window.alert('请求参数: location: ' + JSON.stringify(params));
        return $http.post(url, params, obj)
          .then(requestSuccess, requestFail);
      };
    }

    var api = true ? huboApi : apiConfig;
    var url = api.isDebug ? api.test_url : api.lbs_url;

    // Public API here
    return {
      login       : request(url + api.login),
      register    : request(url + api.register, {withCredentials: true}),
      verification: request(url + api.verification),
      captcha     : request(url + api.captcha)
    };
  });
