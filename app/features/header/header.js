app.controller('HeaderController', function ($scope) { 
    $scope.title = 'HELLO WORLD!!'
});


app.directive('headerDirective', function () {
    return {
      restrict: 'E',
      templateUrl: './app/features/header/header.html',
      controller: 'HeaderController'
    };
  });