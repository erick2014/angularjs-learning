angular.module('greetings',[])
.directive("welcome",function(){
  return {
    restrict:"M",
    link:function(){
      alert("Howdy")
    }
  }
})