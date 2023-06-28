app.controller('ProjectDetailsController', function ($scope, ProjectService, $location) { 
    $scope.project = ProjectService.getProjectSelect();

    $scope.comments = ""
    $scope.typeDocument = "Document - Any Generic Format"

    $scope.back = function(){
        $scope.$emit("Listing");
    }

    $scope.edit = function () {
        $location.path('/projects/edit');
    };
});