angular.module('myApp').controller("ProjectRegistrationController", function ($scope, $rootScope) {
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
    };

    $scope.upload = function () {
      $rootScope.$emit("newProject", $scope.project);
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