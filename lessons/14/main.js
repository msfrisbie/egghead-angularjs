var app = angular.module("twitterApp", []);

app.controller("AppCtrl", function ($scope) {
  $scope.loadMoreTweets = function () {
    alert("Loading tweets!");
  };

  $scope.deleteTweets = function () {
    alert("deleting tweets");
  };
});

app.directive("enter", function () {
  return function (scope, element, attrs) {
    element.bind("mouseenter", function () {
      scope.$apply(attrs.enter);
    });
  };
});
