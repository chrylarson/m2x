'use strict';

describe('Controller: DatasourceCtrl', function () {

  // load the controller's module
  beforeEach(module('m2xApp'));

  var DatasourceCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DatasourceCtrl = $controller('DatasourceCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
