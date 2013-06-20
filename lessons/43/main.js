var app = angular.module("app", []);

app.config(function ($logProvider) {
  $logProvider.debugEnabled(false);
});

app.run(function ($rootScope, $log) {
  $rootScope.$log = $log;
});

app.controller("FooCtrl", function($scope) {
  $scope.myFunc = function (ev) {
    console.warn(ev);
  };
});
