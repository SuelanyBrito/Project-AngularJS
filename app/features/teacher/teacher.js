app.controller('TeacherController', ['$scope', '$location', function ($scope, $location) { 
    $scope.teachers = []; 

    $scope.home = function () {
      $location.path('/home');
    };
    
    $scope.login = function () {
      $location.path('/login');
    };
    
    $scope.registrationTeacher = function () {
        // Lógica para cadastrar um novo aluno
        var newTeacher = {
          name: $scope.fullName = '',
          email: $scope.email = '',
          password: $scope.password = '',
          occupation: $scope.occupation = '',
          formation: $scope.formation = ''
        };
        $scope.teachers.push(newTeacher);
  
        // Limpar os campos do formulário
        $scope.name = '';
        $scope.email = '';
        $scope.password = '';
        $scope.occupation = '';
        $scope.formation = '';
      };
}]);