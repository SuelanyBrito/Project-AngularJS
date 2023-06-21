app.controller('ProjectDetailsController', function ($scope, ProjectService) { 
    $scope.project = ProjectService.getProjectSelect();

    $scope.comments = ""
    $scope.typeDocument = "Document - Any Generic Format"

    $scope.back = function(){
        $scope.$emit("Listing");
    }
});