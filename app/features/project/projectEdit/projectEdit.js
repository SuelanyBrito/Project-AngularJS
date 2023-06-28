app.controller("ProjectEditController", function ($scope, ProjectService, $location) {
    $scope.project = ProjectService.getProjectSelect();

    $scope.cancel = function () {
        $scope.$emit("Listing");
    };

    $scope.upload = function () {
      ProjectService.updateProject($scope.project);
      $location.path('/projects');
    };

    $scope.click = function () {
      document.getElementById("file-input-document").click();
    };

    $scope.inputFileChange = function (element) {
      $scope.project.document = element.files[0];
    };
    
  });