var app = angular.module("app", []);

app.config(function ($routeProvider) {
  console.log($routeProvider);
  $routeProvider
    .when('/',
    {
      templateUrl:"app.html",
      controller:"AppCtrl"
    })
    .when('/pizza', {
      template: "Yum!"
    })
    .otherwise({
      template: "This doesn't exist!"
    });
});

app.controller("AppCtrl", function ($scope, $route) {
  console.log($route);
  $scope.model = {
    message: "This is my app"
  };
});
