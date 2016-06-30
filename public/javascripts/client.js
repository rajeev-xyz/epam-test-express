/*
author: rajeev.jayaswal
website: www.rajeevjayaswal.xyz
*/
var myApp = angular.module('app', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider){
  $routeProvider.when("/page1",
    {
      templateUrl: "page1.html"
    }
  );
}]);

myApp.controller('homeCtrl', function($http, $scope) {

 $http.get("/api/articles").then(function(response) {
            $scope.articles = response.data;
            //console.log($scope.articles);
        });
    
    
 $scope.fetchContent = function(id) {
      console.log(id); 
      var content = $('#article-content-desc');
      $http.post("/api/content/",{"id":id}).then(function(response) {
        var res = response.data;
        content[0].innerHTML = "<h1>"+res.title+"</h1>"+ "<p>"+res.content+"</p>";
        
      });
    }
  
});