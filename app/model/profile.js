function EmployerProfile(employer) {
    this.id = employer.id || null;
    this.returnCustomer = employer.returnCustomer || false;
    this.receiveUpdates = employer.receiveUpdates || false;
    this.name = employer.name || null;
    this.email = employer.email || null;
    this.password = employer.password || null;
    this.active = employer.active || true;
    
    return this;
}

angular.module('navaja-web')
    .factory('EmployerProfile', EmployerProfile);

