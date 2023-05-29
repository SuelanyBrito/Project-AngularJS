app.directive('registrationTeacher', function () {
    return {
      restrict: 'E',
      templateUrl: 'features/teacher/directives/registration-teacher.html',
      controller: 'TeacherController'
    };
  });