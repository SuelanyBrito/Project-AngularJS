app.controller('TeacherController', function ($scope) { 
    $scope.teachers = []; 
    
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
});