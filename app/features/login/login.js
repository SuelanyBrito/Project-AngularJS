app.controller('LoginController', ['$scope', '$location', function ($scope, $location, $timeout) { 
    $scope.title = 'Login'
    $scope.userData = {};

    $scope.login = function () {
        var username = $scope.userData.username;
        var password = $scope.userData.password;

        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        
        $timeout(function () {
            $location.path('/home');
        }, 1000);
        
    };

    $scope.register = function () {
        $location.path('/register');
    };

}]);