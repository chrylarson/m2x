'use strict';

angular.module('m2xApp')
  .controller('BatchesCtrl', function ($rootScope, $scope, $http) {
  	$scope.batches = {};

  	var urlBatches = $rootScope.urlRoot + '/batches'
	$http({
        url: urlBatches,
        method: "GET",
        timeout: 10000,
        headers: {'Content-Type': 'application/json'}
    }).success(function (data) {
    	$scope.batches = data;
    	console.log(data);
	    }).error(function (response, status) {

	    });
  });
