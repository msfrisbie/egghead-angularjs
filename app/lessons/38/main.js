var app = angular.module("app", []);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/',
    {
      templateUrl: "app.html",
      controller: "ViewCtrl",
      resolve: {
        loadData: viewCtrl.loadData,
      }
    });
});

app.directive("error", function($rootScope) {
  return {
    restrict: "E",
    template: '<div class="alert-box alert" ng-show="isError">Error!</div>',
    link: function(scope) {
      $rootScope.$on("$routeChangeError", function (event, current, previous, rejection) {
        scope.isError = true;
      });
    }
  }
});

app.controller('AppCtrl', function ($rootScope) {
  $rootScope.$on("$routeChangeError", function (event, current, previous, rejection) {
    console.log(event);
  });
});

var viewCtrl = app.controller("ViewCtrl", function ($scope, $q) {
  console.log($route);
  $scope.model = {
    message: 'This is my app'
  };
});

viewCtrl.loadData = function($q, $timeout) {
  var defer = $q.defer();
  $timeout(function() {
    defer.reject("Your network is down");
  }, 500);
  return defer.promise;
};
