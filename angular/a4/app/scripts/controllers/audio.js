'use strict';

/**
 * @ngdoc function
 * @name k4App.controller:AudioCtrl
 * @description
 * # AudioCtrl
 * Controller of the k4App
 */

var mockDataForThisTest = "json=" + encodeURI(JSON.stringify([
    {
    id: 1,
    firstName: "Peter",
    lastName: "Jhons"},
{
    id: 2,
    firstName: "David",
    lastName: "Bowie"}
]));

var item1=
	{   id:1,
		    firstName: "Peter",
		    lastName: "Jhons"};
var item2=
{   id:2,
	    firstName: "kunhu",
	    lastName: "tsai"};

var mockDataForThisTest2 =[];
mockDataForThisTest2.push(item1);
mockDataForThisTest2.push(item2);



/*
function PeopleCtrl($scope, $http) {

    $scope.people = [];

    $scope.loadPeople = function() {
        var httpRequest = $http({
            method: 'POST',
            url: '/echo/json/',
            data: mockDataForThisTest

        }).success(function(data, status) {
            $scope.people = data;
        });

    };

}
*/

angular.module('k4App')
.controller('AudioCtrl', function($scope,$http,$interval) {
    $scope.firstName = "John",
    $scope.lastName = "Doe";

    var array=[];

    var json ={
    		Name : "Name1",
    		Country : "Country1"
    };
    var json1 ={
    		Name : "Name2",
    		Country : "Country2"
    };
    array.push(json);
    array.push(json1);
    
    $scope.names = array;
    	
    console.log('array is ' + array);
    
    /*
    $http.get("https://www.youtube.com/watch?reload=9&v=LF6G6-4EDDg")
    .then(function(response) {
        $scope.myWelcome = response.data;
        console.log('Kunhu debug');
    });	
    */
    console.log('Kunhu debug : people+++');
    //
    $scope.loadPeople = function() {
    	
    	
    	 $http.get("#!/json/").then(function (response) {
    	        //$scope.myWelcome = response.data;
            	console.log('Kunhu debug : people ???');
                $scope.people = response.data;
                console.log('Kunhu debug : response:'+$scope.people);
    	 });
    	/*        
        var httpRequest = $http({
            method: 'GET',
            url: '#!/json/',
            data: mockDataForThisTest

        }).success(function(data, status) {
        	console.log('Kunhu debug : people');
            $scope.people = data;
           
        });
        */ 
        //$scope.people = mockDataForThisTest2;
        
        //console.log('Kunhu debug : people:'+ mockDataForThisTest2);
    };
    $scope.dropDownList=["item1","item2","item3"];
    
    console.log('Kunhu debug : time+++');
    
    $scope.theTime = new Date().toLocaleTimeString();
    $interval(function () {
        $scope.theTime = new Date().toLocaleTimeString();
    }, 1000);


});

