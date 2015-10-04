
var NavajaController = function ($scope) {
    $scope.someCondition = true;
    $scope.someFunction = function(foo) {
       var bar = foo;
       return foo + bar;
    }
}

angular.module('navaja-web', [])
  .controller('NavajaController', NavajaController);
