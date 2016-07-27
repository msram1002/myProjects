myApp.service('studentInfo', function() {

  var sarray = [];
  var statistics = [];

  return {
    record: function(x, y) {
      var studentrecord = {
        name: x,
        marks: y
      }
      sarray.push(studentrecord);
      return sarray;
    },

    calc: function(j) {
      statistics.push(j);
      return statistics;
    }
  };
});

myApp.controller('studentDetails', function($scope, studentInfo) {

  var student;
  var stats;

  $scope.myaddFunction = function() {

    var thisTotal = 0;
    var min;
    var max;
    var mean;
    $scope.student = studentInfo.record($scope.a, $scope.b);

    stats = studentInfo.calc($scope.b).map(Number);

    $scope.a = ' ';
    $scope.b = ' ';
    
    $scope.min = Math.min.apply(Math, stats);
    $scope.max = Math.max.apply(Math, stats);

    for (var i = 0; i < stats.length; i++) {
      thisTotal += stats[i];
    }
        // calculate average
    mean = (thisTotal / stats.length);
    $scope.mean = mean.toFixed(2);
  };
});