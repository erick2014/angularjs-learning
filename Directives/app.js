angular.module('greetings',[])
.directive("welcome",function(){
  return {
    restrict:"C",
    link:function(){
      alert("Howdy")
    }
  }
})