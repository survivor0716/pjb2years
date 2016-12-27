'use strict';

angular.module('paymewDistributor')
  .factory('api', function ($log, $http, $q, $window, apiConfig, $location) {
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

    var apiUrl = $location.absUrl().split('/web');
    $log.debug('in api: ', apiUrl);
    var url = apiConfig.isDebug ? apiConfig.test_url : apiConfig.lbs_url + apiUrl[0];

    // Public API here
    return {
      login       : request(url + apiConfig.login),
      register    : request(url + apiConfig.register, {withCredentials: true}),
      verification: request(url + apiConfig.verification),
      captcha     : request(url + apiConfig.captcha),
      wxshare     : request(url + apiConfig.wxshare)
    };
  });
