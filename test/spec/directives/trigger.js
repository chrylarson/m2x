'use strict';

describe('Directive: trigger', function () {

  // load the directive's module
  beforeEach(module('m2xApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<trigger></trigger>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the trigger directive');
  }));
});
