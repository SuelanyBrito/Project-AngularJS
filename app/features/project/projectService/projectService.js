app.service('ProjectService', function() {
    var dataList = [];

    var projectselect = '';
  
    this.addData = function(project) {
      dataList.push({
        name: project.name,
        description: project.description,
        date: new Date(2023, 6, 19),
        coordinator: project.coordinator,
        students: project.students,
      });
    };
  
    this.getDataList = function() {
      return dataList;
    };

    this.setProjectSelect = function(project) {
      projectselect = project;
    };

    this.getProjectSelect = function() {
      return projectselect;
    };

});
  