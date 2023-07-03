app.controller('ProjectListController', function (ProjectService, $scope, $location) { 
    $scope.pages = [5, 10, 15, 20, 25];
      
    $scope.dataList = ProjectService.getDataList();

    $scope.newProject = function(){
        $location.path('/projects-registration');
    }

    $scope.details = function(project){
        ProjectService.setProjectSelect(project);
        $scope.$emit("Details");
    }

    $scope.sizeList = ProjectService.size();

    $scope.numCustomProjects = function () {
        return $scope.sizeList < '10' ? '0' + $scope.sizeList : $scope.sizeList;
    }

    $scope.selectedPage = $scope.pages[0];  

    $scope.numberOfPages = function(){
        return Math.ceil($scope.sizeList/$scope.selectedPage);
    }
});