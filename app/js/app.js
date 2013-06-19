'use strict';

var eggApp = angular.module('eggApp',['eggApp.filters', 'eggApp.services', 'eggApp.directives', 'eggApp.controllers'])

// Declare app level module which depends on filters, and services
eggApp.config(['$routeProvider', function($routeProvider) {
    // $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
    // $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
    // $routeProvider.otherwise({redirectTo: '/view1'});
  }]);
