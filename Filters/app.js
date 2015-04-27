function TestCtrl(){
  //basic controller where we present the scope myString variable
  var self=this;
  self.myString="Hello World";
}

//this is where the filter magic happens.
function CapitalizeFilter(){
   //text is the original string output of the Angular expression
  return function(text){
    //return the text in upper case!
    return text.toUpperCase();
  }
}

angular.module('app',[])
.controller('TestCtrl',TestCtrl)
//define a filter called capitalize that will invoke the CapitalizeFilter function
.filter('capitalize',CapitalizeFilter);