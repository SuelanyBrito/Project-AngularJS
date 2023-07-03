app.service('ProjectService', function() {
    var dataList = [];

    var projectselect = '';
  
    this.addData = function(project) {
      dataList.push({
        name: project.name,
        description: project.description,
        date: new Date(2023, 6, 19),
        coordinator: project.coordinator,
        students: project.student,
        document: project.document
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

    this.size = function(){
      return dataList.length;
    }

    this.updateProject = function(project) {
      var index = dataList.findIndex(function(item) {
        return item.name === projectselect.name;
      });
  
      if (index !== -1) {
        dataList[index] = {
          name: project.name,
          description: project.description,
          date: project.date,
          coordinator: project.coordinator,
          students: project.students,
          document: project.document
        };
      }
    }
});
  