var app = angular.module("phoneApp", []);

app.controller("AppCtrl", function ($scope) {
  this.sayHi = function () {
    alert('hi');
  };

  return $scope.AppCtrl = this;
});
