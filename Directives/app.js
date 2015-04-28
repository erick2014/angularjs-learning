angular.module('greetings',[])
.directive("welcome",function(){
  return {
    restrict:"A",
    link:function(){
      alert("Howdy")
    }
  }
})