app.directive('sidenavPage', function() {
    return {
      restrict: 'E',
      templateUrl: './app/features/sidenav/sidenav.html',
      controller: 'SidenavController'
    };
  })
  
  app.controller("SidenavController", function ($scope) {
    
  });