function FunCtrl(){
  var self=this;
  self.start=function(){
    console.log("Fun times have been started!");
  }
}

angular.module('coolApp',[])

.controller('FunCtrl',FunCtrl)
.directive("entering",function(){
  //directive definition here
  return function(scope,element,attrs){
    element.bind("mouseenter",function(){
      console.log(scope);
      scope.$apply("fun.start()");
    })
  }
})