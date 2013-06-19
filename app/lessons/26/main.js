var app = angular.module("app", []);

app.controller("MyCtrl", ['$scope','$http', function ($scope,$http) {
  console.log($scope);
}]);

app.controller("MyCtrl", function ($scope, $http, $parse) {

});

app.directive("myDirective", function ($http,$parse) {
  return {
    link: function(scope, element, attrs) {
      console.log(element);
    }
  };
});
