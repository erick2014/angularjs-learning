var app = angular.module("app",[]);

app.directive("country",function(){
  return{
    restrict:"E",
    controller:function(){
      this.makeAnnouncement=function(message){
        console.log("Country says: "+message)
      };
    }
  }
});

app.directive('state',function(){
  return{
    restrict:"E"
  }
})

app.directive("city", function () {
  return {
    restrict: "E",
    require: "^country",
    link: function (scope, element, attrs, countryCtrl) {
      countryCtrl.makeAnnouncement("This city rocks");
    }
  };
});
