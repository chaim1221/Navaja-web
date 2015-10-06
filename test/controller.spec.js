describe('module: NavajaController', function () {
  var scope, controller, service;
  var fakeEmployer = {
          "returnCustomer": false,
          "receiveUpdates": false,
          "name": "Ali Baba",
          "email": "alibaba@40thieves.org",
          "password": "openSesame",
          "active": false,
          "id": 217
        };

  beforeEach(module('navaja-web'));
  beforeEach(function() {
      service = { create: jasmine.createSpy() };
      module(function ($provide) {
          $provide.value('NavajaService', service);
      });
  });
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    controller = $controller("NavajaController", { $scope: scope, service: service });
  }));

  describe('initially', function () {
    it('sets someCondition to true', function () { 
      scope.createEmployer(fakeEmployer);
      expect(service.create).toHaveBeenCalledWith(fakeEmployer);
    });
  });
});

