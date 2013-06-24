var app = angular.module("phoneApp", []);

app.controller("AppCtrl", function ($scope) {

});

app.directive("panel", function() {
  return {
    restrict: "E",
    transclude: true,
    template: '<div class="panel" ng-transclude>This is a panel component</div>'
  };
});
