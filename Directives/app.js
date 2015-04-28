angular.module('functionalities',[])

.directive("entering",function(){
  return function(scope,element){
    element.bind("mouseenter",function(){
      element.addClass("activeClass");
    })
  }
})

.directive("leaving",function(){
  return function(scope,element){
    element.bind("mouseleave",function(){
      element.removeClass("activeClass");
    })
  }
})