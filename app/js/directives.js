'use strict';

/* Directives */


angular.module('eggApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]).
  directive('topnav', function() {
    return {
      restrict: "E",
      templateUrl: "partials/topnav.html"
    }
  });
