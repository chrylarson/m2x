'use strict';

angular.module('m2xApp')
  .controller('BlueprintsCtrl', function ($rootScope, $scope, $http) {
  	$scope.blueprints = {};

  	var urlBlueprints = $rootScope.urlRoot + '/blueprints'
	$http({
        url: urlBlueprints,
        method: "GET",
        timeout: 10000,
        headers: {'Content-Type': 'application/json'}
    }).success(function (data) {
    	$scope.blueprints = data;
    	console.log(data);
	    }).error(function (response, status) {

	    });

  });
