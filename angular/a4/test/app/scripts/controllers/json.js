'use strict';

/**
 * @ngdoc function
 * @name k4App.controller:AudioCtrl
 * @description
 * # AudioCtrl
 * Controller of the k4App
 */
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
.controller('JsonCtrl', function($scope,$http,$interval) {
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
    
    //$scope.myjson = array;
    $scope.myjson = mockDataForThisTest2;
  
});

