'use strict';

angular.module('m2xApp')
  .controller('TriggersCtrl', function ($rootScope, $scope, $http, $routeParams) {
  	$scope.triggers = {};
    var feedId = ($routeParams.feedId || "");
  	var urlTriggers = $rootScope.urlRoot + '/feeds/' + feedId + '/triggers'
	$http({
        url: urlTriggers,
        method: "GET",
        timeout: 10000,
        headers: {'Content-Type': 'application/json'}
    }).success(function (data) {
    	$scope.triggers = data;
    	console.log(data);
	    }).error(function (response, status) {

	    });
  });
