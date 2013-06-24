var app = angular.module("drinkApp", []);

app.controller("AppCtrl", function ($scope) {
  $scope.ctrlFlavor = "blackberry";
});

app.directive("drink", function () {
  return {
    scope: {
      flavor:"@"
    },
    template: '<div>{{ flavor }}</div>'//,
    // link: function (scope, element, attrs) {
    //   scope.flavor = attrs.flavor;
    // }
  };
});
