const app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: './app/features/login/login.html',
        controller: 'LoginController'
      })
      .when('/home', {
        templateUrl: './app/features/home/home.html',
        controller: 'HomeController'
      })
      .when('/register', {
        templateUrl: './app/features/register/register.html',
        controller: 'RadioController'
      })
      .otherwise({
        redirectTo: '/'
      });
  })