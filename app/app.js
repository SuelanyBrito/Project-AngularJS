const app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: './app/features/login/login.html',
        controller: 'LoginController',
        resolve: {
          mostrarHeader: function() { return false; },
          mostrarSidenav: function() { return false; }
        }
      })
      .when('/home', {
        templateUrl: './app/features/home/home.html',
        controller: 'HomeController',
        resolve: {
          mostrarHeader: function() { return true; },
          mostrarSidenav: function() { return true; }
        }
      })
      .when('/register', {
        templateUrl: './app/features/register/register.html',
        controller: 'RadioController',
        resolve: {
          mostrarHeader: function() { return false; },
          mostrarSidenav: function() { return false; }
        }
      })
      .otherwise({
        redirectTo: '/',
        mostrarHeader: function() { return true; },
        mostrarSidenav: function() { return true; }
      });
  })