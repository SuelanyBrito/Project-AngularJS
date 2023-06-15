app.controller('ProjectDetailsController', ['$scope', '$location', function ($scope, $location) { 
    $scope.nameProject = "Name of Project";
    $scope.description = "Lorem Ipsum dolor sit amet, consectetur adipis, sed do eiusmod tempor incididunt ut labore et dol, itaque, sed do eiusmod tempor incididunt, ullamcorper itaque";
    
    $scope.projectCoordinator = "Adalberto";
    $scope.students = [
        {
            name: "Suelany",
            class: "Júnior"
        },
        {
            name: "Leticia",
            class: "Pleno"
        }
    ]
    $scope.upload = new Date(2022,17,7)
    $scope.comments = ""
    $scope.typeDocument = "Document - Any Generic Format"
    $scope.format = "pdf"
    $scope.fileSize = '820Kb'
}]);