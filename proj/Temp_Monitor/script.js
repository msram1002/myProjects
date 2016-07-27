// Code goes here

/* function myFunction() {
  var x;

  // Get the value of the input field with id="temperture"
  x = document.getElementById("temperture").value;

  // If x is Not a Number
  if (x === '') {
    text = "Enter a numerical value before you click on 'Add'.";
    document.getElementById('error').innerHTML = '<span class="glyphicon glyphicon-exclamation-sign"></span> ' + '<em>' + text + '</em>' + '  <button onclick="myClear()" type="button" class="btn btn-info btn-xs">Clear</button>';
  } else if (isNaN(x)) {
    text = "Please enter only numbers";hicon glyphicon-exclamation-sign"></span> ' + '<em>' + text + '</em>' + '  <button onclick="myClear()" type="button" class="btn btn-info btn-xs">Clear</button>';
  }
    document.getElementById('error').innerHTML = '<span class="glyp
}

function myClear() {
  document.getElementById('error').innerHTML = '';
  document.getElementById("temperture").value = '';
}
*/

function myClear(){
  document.getElementById("temperture").value = '';
}

myApp.service('TemperatureMonitor', function() {

  var tempvalues = [];

  return {
    
    recordTemperature: function(x){
      //var tempvalues = [];
      tempvalues.push(x);
      return tempvalues;
    },

    getCurrentMedian: function(arr){
      var sortedArray=arr;
      if (arr.length < 2) {
        return arr;
        } 
        else 
        {
          var sort = function(arr)
          {
                var swapped = false;

                for(var i = 1; i < arr.length; i++ ) {
                var prev = arr[i - 1];
                var current = arr[i];

              // If the previous number is > than the current, swap them around
              if( prev > current ) {
                swapped = true;

                sortedArray[i] = prev;
                sortedArray[i - 1] = current;
                }
            }

            // If there has been a swap, sort over the array again
            if( swapped ) {
              return sort(arr);
              }

              }
          sort(arr);
        }
      
        console.log(sortedArray);
        if(arr.length%2==0)
        {
          return (  (sortedArray[(arr.length/2)] + sortedArray[(arr.length/2) - 1]) / 2 );
        } else
        {
          return (sortedArray[(arr.length-1)/2]);
        }
    }
  };
});

/*    
  this.recordTemperature = function(x) {
    tempvalues.push(x);
    return tempvalues;
  };

  this.getCurrentMedian = function(tempArray) {
  
  var sortedArray = tempArray;
  var al=tempArray.length;
  var sort = function (tempArray){
    var swapped = false;

    for(var i = 1; i < al; i++ ) {
    var prev = tempArray[i - 1];
    var current = tempArray[i];

    // If the previous number is > than the current, swap them around
    if( prev > current ) {
      swapped = true;

      sortedArray[i] = prev;
      sortedArray[i - 1] = current;
    }

  }

  // If there has been a swap, sort over the array again
  if( swapped ) {
    return sort();
  }

  }
  sort();

  console.log(sortedArray);

  if(al%2==0){
    return (  (sortedArray[Math.floor(al/2)] + sortedArray[Math.floor((al-1)/2)]) / 2 );
  } else{
    return (sortedArray[Math.floor(al/2)]);
  }
  
  }; 

});*/

myApp.controller('tempMonitor', function($scope, TemperatureMonitor) {
  var tempArray ;
  $scope.myaddFunction = function() {
      if($scope.a == "" || isNaN($scope.a)){
        return;
      }
      tempArray = (TemperatureMonitor.recordTemperature($scope.a)).map(Number);
      console.log(tempArray);
  };

  $scope.myMedian = function() {
      $scope.medianValue = TemperatureMonitor.getCurrentMedian(tempArray);
  };
});