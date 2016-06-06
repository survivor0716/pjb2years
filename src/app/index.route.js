(function() {
  'use strict';

  angular
    .module('paymewDistributor')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/home/home.html',
        controller: 'HomeController',
        controllerAs: 'home'
      })
      .when('/demo', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/rule', {
        templateUrl: 'app/rule/rule.html',
        controller: 'RuleController',
        controllerAs: 'rule'
      })
      .when('/getNow', {
        templateUrl: 'app/getNow/getNow.html',
        controller: 'GetNowController',
        controllerAs: 'getNow'
      })
      .when('/getNowShared', {
        templateUrl: 'app/getNowShared/getNowShared.html',
        controller: 'GetNowSharedController',
        controllerAs: 'getNowShared'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
