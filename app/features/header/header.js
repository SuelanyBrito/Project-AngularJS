app.directive('headerPage', function() {
  return {
    restrict: 'E',
    templateUrl: './app/features/header/header.html',
    controller: 'HeaderController'
  };
})

app.controller("HeaderController", function ($scope) {
  $scope.userName = "Suelany";
});