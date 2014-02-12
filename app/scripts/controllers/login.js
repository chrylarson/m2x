'use strict';

angular.module('m2xApp')
  .controller('LoginCtrl', function ($rootScope, $scope, $http, $location) {
  	$scope.apiKey = '';
  	$scope.login = function () {
  		$rootScope.apiKey = $scope.apiKey;
  		if ($rootScope.apiKey !== 'undefined') {
            $http.defaults.headers.common['X-M2X-KEY'] = $rootScope.apiKey;
            $location.path('/blueprints');
        }
  	}
  });
