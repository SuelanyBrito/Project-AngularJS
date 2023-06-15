app.controller('ProjectListController', ['$scope', '$rootScope', '$location', function ($scope, $rootScope, $location) { 
    $scope.inicial = "hello world";

    $scope.newProject = function(){
        $location.path('/projects-registration');
    }

    $scope.setValue = function(project){
        console.log($scope.project);
        $scope.$apply(function() {
            $scope.inicial = project;
        });
    };

    $scope.$on("newProject", function(event, newProject){
        console.log(newProject);
        $scope.project = newProject;
        $scope.setValue(newProject);
    });
    
    console.log($scope.inicial);
}]);