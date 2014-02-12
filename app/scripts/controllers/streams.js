'use strict';

angular.module('m2xApp')
  .controller('StreamsCtrl', function ($rootScope, $scope, $http, $routeParams) {
  	$scope.streams = {};
    var feedId = ($routeParams.feedId || "");
  	var urlStreams = $rootScope.urlRoot + '/feeds/' + feedId + '/streams'
	$http({
        url: urlStreams,
        method: "GET",
        timeout: 10000,
        headers: {'Content-Type': 'application/json'}
    }).success(function (data) {
    	$scope.streams = data;
    	console.log(data);
	    }).error(function (response, status) {

	    });
  });
