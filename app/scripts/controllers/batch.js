'use strict';

angular.module('m2xApp')
  .controller('BatchCtrl', function ($rootScope, $scope, $http, $routeParams) {
  	$scope.batch = {};
	var batchId = ($routeParams.batchId || "");
  	var urlBatch = $rootScope.urlRoot + '/batches/' + batchId
	$http({
        url: urlBatch,
        method: "GET",
        timeout: 10000,
        headers: {'Content-Type': 'application/json'}
    }).success(function (data) {
    	$scope.batch = data;
    	console.log(data);

		$http({
	        url: urlBatch + '/datasources',
	        method: "GET",
	        timeout: 10000,
	        headers: {'Content-Type': 'application/json'}
	    }).success(function (data) {
	    	$scope.batch.datasources = data;
	    	console.log(data);
		    }).error(function (response, status) {

		    });

	    }).error(function (response, status) {

	    });


  });
