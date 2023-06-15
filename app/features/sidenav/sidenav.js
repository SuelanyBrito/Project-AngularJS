app.directive('sidenavPage', function() {
    return {
      restrict: 'E',
      templateUrl: './app/features/sidenav/sidenav.html',
      controller: 'SidenavController'
    };
  })
  
  app.controller("SidenavController", function ($location, $scope, $route) {
    $scope.pages = [
      {
        icon: "home",
        select: true,
        rediretUrl: "/home",
      },
      {
        icon: "clipboard-lines",
        select: false,
        rediretUrl: "/projects",
      },
    ];  
      
    $scope.setPage = function (icon) {
      var rediretPage = "";
      $scope.pages.map(function (page) {
        if (page.icon === icon) {
          if (page.select) {
            return page;
          } else {
            page.select = true;
            rediretPage = page.rediretUrl;
            return page;
          }
        } else {
          page.select = false;
          return page;
        }
      });
      if (rediretPage !== "") {
        $location.path(rediretPage);
      }
    };

    $scope.$on("$routeChangeSuccess", function () {
      var currentRoute = $route.current;
      $scope.pages.forEach(function (page) {
        page.select = page.rediretUrl === currentRoute.$$route.originalPath;
      });
    });
  });