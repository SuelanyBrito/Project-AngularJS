app.directive('registrationStudent', function () {
    return {
      restrict: 'E',
      templateUrl: 'scripts/templates/registration-student.html',
      controller: 'StudentController'
    };
  });