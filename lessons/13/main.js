var app = angular.module("behaviorApp", []);

app.directive("enter", function () {
  return function (scope, element, attrs) {
    element.bind("mouseenter", function () {
      element.addClass(attrs.enter);
    });
  };
});

app.directive("leave", function () {
  return function (scope, element, attrs) {
    element.bind("mouseleave", function () {
      element.removeClass(attrs.enter);
    });
  };
});
