'use strict';

angular.module('m2xApp')
  .controller('FeedCtrl', function ($rootScope, $scope, $http, $routeParams) {
  	$scope.feed = {};
	var feedId = ($routeParams.feedId || "");
  	var urlFeed = $rootScope.urlRoot + '/feeds/' + feedId
	$http({
        url: urlFeed,
        method: "GET",
        timeout: 10000,
        headers: {'Content-Type': 'application/json'}
    }).success(function (data) {
    	$scope.feed = data;
    	console.log(data);
	    }).error(function (response, status) {

	    });
  });
