'use strict';

describe('Controller: StreamsCtrl', function () {

  // load the controller's module
  beforeEach(module('m2xApp'));

  var StreamsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StreamsCtrl = $controller('StreamsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
