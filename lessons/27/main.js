var app = angular.module("app", []);

app.directive("zippy", function() {
  return {
    restrict: "E",
    transclude:true,
    scope:{
      title:"@"
    },
    templateUrl: 'zippy.html',
    link: function (scope) {
      scope.isCOntentVisivle = false;
      scope.toggleContent = function () {
        scope.isContentVisible = !scope.isContentVisible;
      };
    }
  };
});
