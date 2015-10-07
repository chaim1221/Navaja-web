function NavajaController ($scope, service) {
    $scope.createEmployer = function(employer) {
       service.create(employer);
    }
}

angular.module('navaja-web')
    .controller('NavajaController', ['$scope', 'NavajaService', NavajaController]);
