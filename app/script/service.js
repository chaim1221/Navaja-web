function NavajaService ($http) {
    this.create = function (employer) {
        return $http.post('localhost:8080/api/employer/profile', employer);
    }
}

angular.module('navaja-web')
    .service('NavajaService', NavajaService);

