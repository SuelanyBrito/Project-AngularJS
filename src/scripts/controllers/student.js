app.controller('StudentController', function ($scope) { 
    $scope.students = []; 
    
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
});