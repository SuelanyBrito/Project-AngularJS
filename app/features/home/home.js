app.controller('HomeController', ['$scope', '$location', function ($scope, $location) { 
    $scope.projectList = function () {
        $location.path('/projects');
    };
}]);