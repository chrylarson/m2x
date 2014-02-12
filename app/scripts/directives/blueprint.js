'use strict';

angular.module('m2xApp')
  .directive('blueprint', function () {
    return {
      templateUrl: 'views/templates/blueprint.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        //element.text('this is the blueprint directive');
      }
    };
  });
