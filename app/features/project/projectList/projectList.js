app.controller('ProjectListController', ['$scope', '$rootScope', '$location', function ($scope, $rootScope, $location) { 
    var initialValue = "hello world"; 
    
    $scope.inicial = initialValue;

    $scope.newProject = function(){
        $location.path('/projects-registration');
    }

    $scope.details = function(){
        $location.path('/projects-details');
    }

    $scope.setValue = function(project){
        console.log(project);
        $scope.inicial = project;
        initialValue = project;
    };
    
    var projectListener = $rootScope.$on("newProject", function (event, project) {
        console.log("Novo projeto recebido:", project);
        $scope.setValue(project);
    });

    console.log( $scope.inicial);
 
    $scope.$on("$destroy", function () {});

    console.log( initialValue);
}]);