var app = angular.module("superhero", []);

app.directive("superman", function () {
  return {
    restrict: "A",
    // restrict: "C",
    // restrict: "M",
    link: function () {
      alert("I'm working stronger!");
    }
  };
});

app.directive("flash", function () {
  return {
    restrict: "A",
    link: function () {
      alert("I'm working faster!");
    }
  };
});
