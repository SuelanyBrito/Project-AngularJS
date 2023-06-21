app.controller("ProjectController", function ($scope) {
    $scope.tab = "content";

    $scope.setTab = function (tab) {
      $scope.tab = tab;
    };

    $scope.$on("Listing", function () {
      $scope.tab = "content";
    });

    $scope.$on("Details", function () {
      $scope.tab = "details";
    });
  })