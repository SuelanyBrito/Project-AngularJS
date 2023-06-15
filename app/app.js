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
        templateUrl: './app/features/project/projectList/projectList.html',
        controller: 'ProjectListController',
      })
      .when('/projects-registration', {
        templateUrl: './app/features/project/projectRegistration/projectRegistration.html',
        controller: 'ProjectRegistrationController',
      })
      .when('/projects-details', {
        templateUrl: './app/features/project/projectDetails/projectDetails.html',
        controller: 'ProjectDetailsController',
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