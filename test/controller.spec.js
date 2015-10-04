describe('module: NavajaController', function () {
  beforeEach(module('navaja-web'));
  
  var scope, controller;

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    controller = $controller("NavajaController", { $scope: scope });
  }));

  describe('initially', function () {
    it('sets someCondition to true', function () { 
      
    });
  });
});
