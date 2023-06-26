app.controller('ProjectListController', function (ProjectService, $scope, $location) { 
      
    $scope.dataList = ProjectService.getDataList();

    $scope.newProject = function(){
        $location.path('/projects-registration');
    }

    $scope.details = function(project){
        ProjectService.setProjectSelect(project);
        $scope.$emit("Details");
    }

    $scope.sizeList = ProjectService.size();
    
});