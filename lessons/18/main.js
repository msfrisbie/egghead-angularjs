var app = angular.module("drinkApp", []);

app.controller("AppCtrl", function ($scope) {
  $scope.ctrlFlavor = "blackberry";
});

app.directive("drink", function () {
  return {
    scope: {
      flavor:"="
    },
    //template: '<div>{{ flavor }}</div>'
    template: '<input type="text" ng-model="flavor">'
  };
});
