app.controller('StudentController', ['$scope', '$location', function ($scope, $location) { 
    $scope.students = []; 

    $scope.home = function () {
      $location.path('/home');
    };
    
    $scope.login = function () {
      $location.path('/login');
    };
    
    $scope.registrationStudent = function () {
        // Lógica para cadastrar um novo aluno
        var newStudent = {
          name: $scope.fullName = '',
          email: $scope.email = '',
          password: $scope.password = '',
          education: $scope.education = ''
        };
        $scope.students.push(newStudent);
  
        // Limpar os campos do formulário
        $scope.name = '';
        $scope.email = '';
        $scope.password = '';
        $scope.education = '';
      };
}]);