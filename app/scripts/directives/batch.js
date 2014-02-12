'use strict';

angular.module('m2xApp')
  .directive('batch', function () {
    return {
      templateUrl: 'views/templates/batch.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        //element.text('this is the batch directive');
      }
    };
  });
