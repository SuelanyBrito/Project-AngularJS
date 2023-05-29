app.directive('registrationStudent', function () {
    return {
      restrict: 'E',
      templateUrl: 'features/student/directives/registration-student.html',
      controller: 'StudentController'
    };
  });