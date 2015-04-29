;(function (window){

  angular.module('app',[])
  //define directives here
  .directive('tab',function(){
    return {
      restrict:'E',
      transclude:true,
      template:'<div role="tabpanel" ng-show="active" ng-transclude></div>',
      require:'^tabset',
      scope:{ heading:'@'},
      link:function(scope,elem,attr,tabsetCtrl){
        scope.active=false;
        console.log(scope);
        tabsetCtrl.addTab(scope);
      }
    }
  })

  .directive('tabset',function(){
    return {
      restrict:'E',
      transclude:true,
      scope:{},
      templateUrl:"tabset.html",
      bindToController:true,
      controllerAs:'tabset',
      controller:function(){
        var self=this;
        self.tabs=[];
        self.addTab=function(tab){
          self.tabs.push(tab);
          if(self.tabs.length===1){
            tab.active=true;
          }
        }
        self.select=function(selectedTab){
           //loop all tabs
          for(i=self.tabs.length;i--;){
            //disable tab that was active
            if( self.tabs[i].active && self.tabs[i]!==selectedTab ){
              self.tabs[i].active=false;
            }
          }

          //active the selected tab
          selectedTab.active=true;
        }
      }
    }
  })
})(window)