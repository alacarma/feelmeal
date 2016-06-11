
var feelMApp = angular.module('feelmealApp',[]);


var model = {
    user:"Want something",
};

feelMApp.run(function($http) {
    $http.get("http://localhost:3000/ws_todo/getActionsData").success(function(data){
        console.log(data);
        model.items = data;
    });
});

feelMApp.controller('feelMealCtrl',['$scope', function($scope) {
  $scope.hottitle = 'Want someting';
  $scope.hottitle2 = 'HOT?'; 
  $scope.meattitle = 'Want to'; 
  $scope.meattitle2 = 'MEAT?'; 
  $scope.spicytitle = 'Want to feel'; 
  $scope.spicytitle2 = 'SPICY?'; 
  $scope.carbtitle = 'Crave for some';  
  $scope.carbtitle2 = 'CARBS?'; 
  $scope.healthytitle = 'Want to get';  
  $scope.healthytitle2 = 'HEALTHY?'; 
  $scope.freshtitle = 'Want to feel';  
  $scope.freshtitle2 = 'FRESH?'; 
  $scope.sweettitle = 'Want to feel';  
  $scope.sweettitle2 = 'SWEET?'; 

}]);





 /*  app.controller('firstController', function ($scope) {
$scope.first = 'Ragnar';
 $scope.last = 'Lodbrok';
 $scope.heading = "The king's message: ";

 $scope.updateMsg = function() {
 $scope.msg = "Hello, "+ $scope.first + " " + $scope.last;
 };
 }); */