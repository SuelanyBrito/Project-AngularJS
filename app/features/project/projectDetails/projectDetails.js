app.controller('ProjectDetailsController', function ($scope, ProjectService) { 
    $scope.project = ProjectService.getProjectSelect();
    console.log($scope.project);
    $scope.comments = ""
    $scope.typeDocument = "Document - Any Generic Format"
});