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

    // $scope.paginate = $scope.calculateView;
    // $scope.currentPage = 1; // a definir

    // $scope.calculateView = function () {
    //   var startIndex = ($scope.currentPage - 1) * $scope.selectedPage;
    //   var endIndex = startIndex + $scope.selectedPage;
    //   return $scope.dataList.slice(startIndex, endIndex);
    // };

    $scope.numberOfPages = function(){
        return Math.ceil($scope.sizeList/$scope.selectedPage);
    }

    // $scope.updatePages = function(){
    //     $scope.paginate
    // }

    // $scope.getRange = function (num) {
    //     return Array.from({ length: num }, (_, index) => index + 1);
    //   };
});