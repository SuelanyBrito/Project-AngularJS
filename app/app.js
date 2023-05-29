const app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'features/home/home.html',
        controller: 'HomeController'
      })
      .when('/register', {
        templateUrl: 'features/register/register.html',
        controller: 'RadioController'
      })
      .when('/login', {
        templateUrl: 'register/login.html',
        controller: 'LoginController'
      })
      .otherwise({
        redirectTo: '/'
      });
  })