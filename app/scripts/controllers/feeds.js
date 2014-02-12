'use strict';

angular.module('m2xApp')
  .controller('FeedsCtrl', function ($rootScope, $scope, $http) {
  	$scope.feeds = {};

  	var urlfeeds = $rootScope.urlRoot + '/feeds'
	$http({
        url: urlfeeds,
        method: "GET",
        timeout: 10000,
        headers: {'Content-Type': 'application/json'}
    }).success(function (data) {
    	$scope.feeds = data;
    	console.log(data);
	    }).error(function (response, status) {

	    });
  });
