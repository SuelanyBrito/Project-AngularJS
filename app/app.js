const app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: './app/features/login/login.html',
        controller: 'LoginController',
      })
      .when('/home', {
        templateUrl: './app/features/home/home.html',
        controller: 'HomeController',
      })
      .when('/register', {
        templateUrl: './app/features/register/register.html',
        controller: 'RadioController',
      })
      .when('/projects', {
        templateUrl: './app/features/project/project.html',
        controller: 'ProjectController',
      })
      .otherwise({
        redirectTo: '/',
      });
})

app.controller('MainController', function($scope, $location) {

  $scope.shouldShow = function() {
    var currentPath = $location.path();
    var allowedRoutes = ['/home', '/projects', '/projects-registration', '/projects-details'];
    return allowedRoutes.includes(currentPath);
  };

  $scope.isGridRequired = function() {
    var currentPath = $location.path();
    var allowedRoutes = ['/home', '/projects', '/projects-registration','/projects-details'];
    return allowedRoutes.includes(currentPath);
  };

});