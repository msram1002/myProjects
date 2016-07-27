/*
describe("tempMonitor", function() {

	//beforeEach(module("app"));

	var mockTemperatureMonitor, mockgetCurrentMedian;

	beforeEach(function(){
  			module(function($provide){
    		$provide.service('getCurrentMedian', function(){
      		this.alert= jasmine.createSpy('alert');
    });
    
  });
  module('services');
});

	beforeEach(inject(function ($controller, $rootScope, _recordTemperature_,_getCurrentMedian_) {
  scope = $rootScope.$new();
  recordTemperature = _recordTemperature_;
  getCurrentMedian = _getCurrentMedian_;
  tempMonitor = $controller('tempMonitor', {
    $scope: scope,
    'recordTemperature': recordTemperature,
    'getCurrentMedian': getCurrentMedian
  });

  
  
}));

  it("return value 4", function() {
    expect(getCurrentMedian([5, 1, -7, 7, 8, 3])).toEqual(4);
  });

});
*/
describe("unit_test", function() {
	var TemperatureMonitor;
	var testArrayOne = [5, 1, -7, 7, 8, 3];
	//var testArrayOne = [5,9,4,7,6,8,1,0,3,2];
	var testArrayTwo = [5, 1, -7, 7, 8, 3, 9];

	beforeEach(function() {
		module('app');

		inject(function(_TemperatureMonitor_) {
			TemperatureMonitor = _TemperatureMonitor_;
		});
	});

	it("should return median value of 4 for the first array", function() {
		var test = TemperatureMonitor.getCurrentMedian(testArrayOne);
		expect(test).toEqual(4);
	});

	it("should return median value of 5 for the second array", function() {
		var test = TemperatureMonitor.getCurrentMedian(testArrayTwo);
		expect(test).toEqual(5);
	});
});