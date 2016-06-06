(function() {
  'use strict';

  angular
    .module('paymewDistributor')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/first/first.html',
        controller: 'FirstController',
        controllerAs: 'first'
      })
      .when('/demo', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/home', {
        templateUrl: 'app/home/home.html',
        controller: 'HomeController',
        controllerAs: 'home'
      })
      .when('/register', {
        templateUrl: 'app/register/register.html',
        controller: 'RegisterController',
        controllerAs: 'home'
      })
      .when('/list', {
        templateUrl: 'app/list/list.html',
        controller: 'ListController',
        controllerAs: 'home'
      })
      .when('/getSuccess', {
        templateUrl: 'app/getSuccess/getSuccess.html',
        controller: 'GetSuccessController',
        controllerAs: 'getSuccess'
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
