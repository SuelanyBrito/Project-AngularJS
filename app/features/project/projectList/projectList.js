app.controller('ProjectListController', function (ProjectService, $scope, $location) { 
      
    $scope.dataList = ProjectService.getDataList();

    $scope.$watch(function () {
        return ProjectService.getDataList();
      }, function (newDataList) {
        $scope.dataList = newDataList;
      });

      console.log($scope.dataList)

    $scope.newProject = function(){
        $location.path('/projects-registration');
    }

    $scope.details = function(project){
        ProjectService.setProjectSelect(project);
        $location.path('/projects-details');
    }
    
});