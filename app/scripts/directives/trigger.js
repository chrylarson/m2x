'use strict';

angular.module('m2xApp')
  .directive('trigger', function () {
    return {
      templateUrl: 'views/templates/trigger.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        //element.text('this is the trigger directive');
      }
    };
  });
