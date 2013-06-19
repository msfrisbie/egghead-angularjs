var app = angular.module("app", []);

app.run(function ($templateCache) {
  $templateCache.put("zippy.html", '<div><h3 ng-click="toggleContent()">{{title}}</h3><div ng-show="isContentVisible" ng-transclude>Hello world</div></div>');
  $templateCache.info();
});

app.directive("zippy", function($templateCache) {
  console.log($templateCache.get("zippy.html"));

  return {
    restrict: "E",
    transclude:true,
    scope:{
      title:"@"
    },
    template: $templateCache.get("zippy.html"),
    link: function (scope) {
      scope.isCOntentVisivle = false;
      scope.toggleContent = function () {
        scope.isContentVisible = !scope.isContentVisible;
      };
    }
  };
});
