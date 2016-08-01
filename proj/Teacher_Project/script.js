storageFactory.factory('getLocalStorage', function() {

    var listofstudents = [];

    return {
        list: listofstudents,
        updateStudents: function(studentArr) {
            if (window.localStorage && studentArr) {
                //local storage for adding data
                localStorage.setItem("students", angular.toJson(studentArr));
            }
            listofstudents = studentArr;
        },

        getstudents: function() {
            //Get data from local storage
            listofstudents = angular.fromJson(localStorage.getItem("students"));
            return listofstudents ? listofstudents : [];
        }
    };
});

myApp.controller('studentDetails', function($scope, getLocalStorage) {

    //To get the Student(s) list from Local storage
    $scope.students = getLocalStorage.getstudents();
    
    //Adding new student record
    $scope.addStudent = function() {
        var name = (undefined != $scope.stuname) ? $scope.stuname.trim() : "";
        var score = (undefined != $scope.stuscore) ? $scope.stuscore : "";

        //Checking for any empty fields
        if("" === name){
            if("" === score) {
                alert("Please enter Student Name and Score");
                return;
            } else {
                alert("Please enter Student Name");
                return;
            }
        } else if("" === score){
            alert("Please enter Student Score");
            return;
        }

        $scope.students.push({
            'name': name,
            'marks': score
        });
        getLocalStorage.updateStudents($scope.students);
        calcstats();
        $scope.stuname = '';
        $scope.stuscore = '';
    };

    //Updating the student record
    $scope.onChange = function() {
        getLocalStorage.updateStudents($scope.students);
        calcstats();
    };

    //Deleting the student record
    $scope.deleteStudent = function(stu) {
        var deletestudent = confirm("Are you sure you want to delete record of " + $scope.students[$scope.students.indexOf(stu)].name + " ?");
        if(deletestudent){
            $scope.students.splice($scope.students.indexOf(stu), 1);
            getLocalStorage.updateStudents($scope.students);
            calcstats();    
        } else{
            return;    
        }       
    };

    //Function to calculate min, max and average grade
    calcstats = function() {
        var stats = [];
        var data = [];
        data = $scope.students;
        if (data == "") {
            $scope.min = 'N/A';
            $scope.max = 'N/A';
            $scope.avg = 'N/A';
        } else {
            var thisTotal = 0;

            for (var i = 0; i < data.length; i++) {
                stats.push((data[i].marks));
            }
            stats = stats.map(Number)

            $scope.min = Math.min.apply(Math, stats);
            $scope.max = Math.max.apply(Math, stats);

            for (var i = 0; i < stats.length; i++) {
                thisTotal += stats[i];
            }
            // Calculate average
            avg = (thisTotal / stats.length);
            $scope.avg = Math.round(avg * 100) / 100;;
        }
    };
    
    calcstats();
});