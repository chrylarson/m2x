'use strict';

describe('Controller: BlueprintsCtrl', function () {

  // load the controller's module
  beforeEach(module('m2xApp'));

  var BlueprintsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BlueprintsCtrl = $controller('BlueprintsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
