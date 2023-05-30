app.controller('LoginController', ['$scope', '$location', function ($scope, $location) { 
    $scope.title = 'Login'

    $scope.login = function () {
        $location.path('/home');
    };

    $scope.register = function () {
        $location.path('/register');
    };
}]);