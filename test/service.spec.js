describe('module: NavajaService', function () {
    var httpBackend, service;
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
    
    beforeEach(inject(function ($injector, NavajaService) {
        httpBackend = $injector.get('$httpBackend');
        
        httpBackend
            .expectPOST('localhost:8080/api/employer/profile', fakeEmployer)
            .respond(function (method, url, data, headers) {
                return [ 200, fakeEmployer ];
            });
        service = NavajaService;
    }));
    
    it('allows the creation of profiles', function () {
        service.create(fakeEmployer).then(function (result) {
            expect(result.data).toEqual(fakeEmployer);
        });
        httpBackend.flush();
    });
});

