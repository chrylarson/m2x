'use strict';

angular.module('m2xApp')
  .controller('DatasourceCtrl', function ($rootScope, $scope, $http) {
  	$scope.datasources = {};

  	var urlDataSources = $rootScope.urlRoot + '/datasources'
	$http({
        url: urlDataSources,
        method: "GET",
        timeout: 10000,
        headers: {'Content-Type': 'application/json'}
    }).success(function (data) {
    	$scope.datasources = data;
    	console.log(data);
	    }).error(function (response, status) {

	    });
  });
