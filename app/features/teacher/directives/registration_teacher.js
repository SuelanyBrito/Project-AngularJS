app.directive('registrationTeacher', function () {
    return {
      restrict: 'E',
      templateUrl: './app/features/teacher/directives/registration-teacher.html',
      controller: 'TeacherController'
    };
  });