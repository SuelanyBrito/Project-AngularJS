app.controller("ProjectRegistrationController", function ($scope, ProjectService, $location) {
    $scope.project = {
      name: "",
      coordinator: "",
      students: "",
      description: "",
      document: {},
    };

    $scope.students = [
      {
        name: "Suelany",
        id: 1,
      },
      {
        name: "Leticia",
        id: 2,
      }
    ];

    $scope.cancel = function () {
      $scope.project = {
        name: "",
        coordinator: "",
        students: "",
        description: "",
        document: {},
      };
      $location.path('/home');
    };

    $scope.upload = function () {
      ProjectService.addData($scope.project);
      console.log($scope.project);
      $location.path('/projects');
    };

    $scope.click = function () {
      document.getElementById("file-input-document").click();
    };

    $scope.inputFileChange = function (element) {
      $scope.project.document = element.files[0];
    };

    
  });