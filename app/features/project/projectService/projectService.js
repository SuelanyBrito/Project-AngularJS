app.service('ProjectService', function() {
    var dataList = [];
  
    this.addData = function(newData) {
      dataList.push(newData);
    };
  
    this.getDataList = function() {
      return dataList;
    };
  });
  