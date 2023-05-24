app.controller('RadioController', function ($scope) {
    $scope.options = [
      { name: 'Student', value: 'student' },
      { name: 'Teacher', value: 'teacher' }
    ];
  
    $scope.optionSelect='';
});