var app = angular.module("app", []);

app.controller('RoomCtrl', function () {
  this.openDoor = function () {
    alert("creak");
  };

  this.buttonTitle = "I'm a button";

  this.foo = "I'm in the room controller!";
});

app.controller('OtherCtrl', function () {
  this.foo = "I'm in the other controller!";
});

