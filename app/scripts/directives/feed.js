'use strict';

angular.module('m2xApp')
  .directive('feed', function () {
    return {
      templateUrl: 'views/templates/feed.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        //element.text('this is the feed directive');
      }
    };
  });
