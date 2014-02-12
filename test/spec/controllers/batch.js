'use strict';

describe('Controller: BatchCtrl', function () {

  // load the controller's module
  beforeEach(module('m2xApp'));

  var BatchCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BatchCtrl = $controller('BatchCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
