app.controller("ProjectRegistrationController", function ($scope, $rootScope, $location) {
    $scope.project = {
      name: "",
      coordinator: "",
      students: "",
      description: "",
      document: "",
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

    $scope.documents = [];

    $scope.cancel = function () {
      $scope.project = {
        name: "",
        coordinator: "",
        students: "",
        description: "",
        document: "",
      };
      $location.path('/home');
    };

    $scope.upload = function () {
      $rootScope.$emit("newProject", $scope.project);
      $location.path('/projects');
    };

    $scope.click = function () {
      document.getElementById("file-input-document").click();
    };

    $scope.inputFileChange = function (element) {
      const file = element.files[0];
      console.log(file);
      $scope.documents = element.files;
      $scope.project.document = file;
    };
  });