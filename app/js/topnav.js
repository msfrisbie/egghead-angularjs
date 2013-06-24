'use strict';

var navApp = angular.module('navApp',['navApp.directives']);

navApp.factory('Directory', function () {
  var Directory = [
    {
      no: '01',
      title:"Binding",
      length:"2:53"
    },
    {
      no: '02',
      title:"Controllers",
      length:"2:13"
    },
    {
      no: '03',
      title:"The Dot",
      length:"3:02"
    },
    {
      no: '04',
      title:"Sharing Data Between Controllers",
      length:"3:19"
    },
    {
      no: '05',
      title:"Defining a Method on the Scope",
      length:"2:16"
    },
    {
      no: '06',
      title:"Filters",
      length:"2:19"
    },
    {
      no: '07',
      title:"Testing Overview",
      length:"5:18"
    },
    {
      no: '08',
      title:"ngFilter",
      length:"5:13"
    },
    {
      no: '09',
      title:"Built-in Filters",
      length:"2:13"
    },
    {
      no: '10',
      title:"First Directive",
      length:"2:08"
    },
    {
      no: '11',
      title:"Directive Restrictions",
      length:"3:01"
    },
    {
      no: '12',
      title:"Basic Behaviors",
      length:"3:29"
    },
    {
      no: '13',
      title:"Useful Behaviors",
      length:"2:55"
    },
    {
      no: '14',
      title:"Directives Talking to Controllers",
      length:"4:43"
    },
    {
      no: '15',
      title:"Directive to Directive Communication",
      length:"8:01"
    },
    {
      no: '16',
      title:"Understanding Isolate Scope",
      length:"6:38"
    },
    {
      no: '17',
      title:"Isolate Scope \"@\"",
      length:"4:51"
    },
    {
      no: '18',
      title:"Isolate Scope \"=\"",
      length:"2:51"
    },
    {
      no: '19',
      title:"Isolate Scope \"&\"",
      length:"6:03"
    },
    {
      no: '20',
      title:"Isolate Scope Review",
      length:"3:30"
    },
    {
      no: '21',
      title:"Transclusion Basics",
      length:"2:48"
    },
    {
      no: '22',
      title:"An Alternative Approach to Controllers",
      length:"2:49"
    },
    {
      no: '23',
      title:"Thinking Differently About Organization",
      length:"4:22"
    },
    {
      no: '24',
      title:"Building Zippy",
      length:"7:55"
    },
    {
      no: '25',
      title:"angular.element",
      length:"8:40"
    },
    {
      no: '26',
      title:"$scope vs. scope",
      length:"9:14"
    },
    {
      no: '27',
      title:"templateUrl",
      length:"3:45"
    },
    {
      no: '28',
      title:"$templateCache",
      length:"3:07"
    },
    {
      no: '29',
      title:"ng-view",
      length:"3:03"
    },
    {
      no: '30',
      title:"The config function",
      length:"2:55"
    },
    {
      no: '31',
      title:"$routeProvider api",
      length:"1:50"
    },
    {
      no: '32',
      title:"$routeParams",
      length:"2:14"
    },
    {
      no: '33',
      title:"redirectTo",
      length:"3:45"
    },
    {
      no: '34',
      title:"Promises",
      length:"4:03"
    },
    {
      no: '35',
      title:"Resolve",
      length:"2:05"
    },
    {
      no: '36',
      title:"resolve conventions",
      length:"3:23"
    },
    {
      no: '37',
      title:"resolve $routeChangeError",
      length:"5:09"
    },
    {
      no: '38',
      title:"Directive for Route Handling",
      length:"3:02"
    },
    {
      no: '39',
      title:"Route Life Cycle",
      length:"4:24"
    },
    {
      no: '40',
      title:"Providers",
      length:"5:06"
    },
    {
      no: '41',
      title:"Injectors",
      length:"2:55"
    },
    {
      no: '42',
      title:"Components and Containers",
      length:"4:27"
    },
    {
      no: '43',
      title:"$index, $event, $log",
      length:"4:48"
    },
    {
      no: '44',
      title:"Experimental \"Controller as\" Syntax",
      length:"5:20"
    },
    {
      no: '45',
      title:"Directive Communication",
      length:"4:27"
    }
  ];
  return Directory;
});

function lessonNavCtrl($scope, Directory) {
  $scope.directory = Directory.map( function (item) {
    item.path = "../../lessons/"+item.no+"/index.html#/";
    return item;
  } );
}

function mainNavCtrl($scope, Directory) {
  $scope.directory = Directory.map( function (item) {
    item.path = "lessons/"+item.no+"/index.html#/";
    return item;
  } );
}

angular.module('navApp.directives', []).
  directive('lessonnav', function() {
    return {
      restrict: "E",
      templateUrl: "../../partials/topnav.html"
    }
  }).
  directive('mainnav', function() {
    return {
      restrict: "E",
      templateUrl: "partials/topnav.html"
    }
  });
