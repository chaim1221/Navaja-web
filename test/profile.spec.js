describe('module: EmployerProfile', function () {
    var employerProfile;
    var data = {
        id: null,
        returnCustomer: true,
        receiveUpdates: true,
        name: "Ali Baba",
        email: "alibaba@40thieves.org",
        password: "openSesame",
        active: false
    };
    
    beforeEach(module('navaja-web'));
    it('creates an EmployerProfile object', function () {
        employerProfile = new EmployerProfile(data);
        expect(employerProfile.id).toBeNull();
        expect(employerProfile.returnCustomer).toBeTruthy();
        expect(employerProfile.receiveUpdates).toBeTruthy();
        expect(employerProfile.name).toBe("Ali Baba");
        expect(employerProfile.email).toBe("alibaba@40thieves.org");
        expect(employerProfile.password).toBe("openSesame");
        expect(employerProfile.active).toBeFalsy;
        expect(employerProfile).toEqual(jasmine.any(EmployerProfile));
    });
});

