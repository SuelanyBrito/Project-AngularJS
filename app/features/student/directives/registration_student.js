app.directive('registrationStudent', function () {
    return {
      restrict: 'E',
      templateUrl: './app/features/student/directives/registration-student.html',
      controller: 'StudentController'
    };
  });