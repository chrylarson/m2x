'use strict';

angular.module('m2xApp')
  .directive('stream', function () {
    return {
      templateUrl: 'views/templates/stream.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        //element.text('this is the stream directive');
      }
    };
  });
