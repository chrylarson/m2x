'use strict';

angular.module('m2xApp', ['ngCookies', 'ngSanitize', 'ngRoute', 'ngAnimate'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/blueprints', {
        templateUrl: 'views/blueprints.html',
        controller: 'BlueprintsCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/batches', {
        templateUrl: 'views/batches.html',
        controller: 'BatchesCtrl'
      })
      .when('/datasources', {
        templateUrl: 'views/datasources.html',
        controller: 'DatasourceCtrl'
      })
      .when('/feeds', {
        templateUrl: 'views/feeds.html',
        controller: 'FeedsCtrl'
      })
      .when('/feeds/:feedId/triggers', {
        templateUrl: 'views/triggers.html',
        controller: 'TriggersCtrl'
      })
      .when('/feeds/:feedId/streams', {
        templateUrl: 'views/streams.html',
        controller: 'StreamsCtrl'
      })
      .when('/feeds/:feedId', {
        templateUrl: 'views/feed.html',
        controller: 'FeedCtrl'
      })
      .when('/batches/:batchId', {
        templateUrl: 'views/batch.html',
        controller: 'BatchCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function ($rootScope, $location) {
      $rootScope.urlRoot = 'http://api-m2x.att.com/v1';
      $rootScope.$on("$routeChangeStart", function (event, next, current) {
          if (typeof $rootScope.apiKey === 'undefined') {
            $location.path('/login');
          }
      });
  });
