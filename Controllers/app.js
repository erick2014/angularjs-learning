angular.module('app',[]);
angular.module('app').controller('MainCtrl',function($scope){
  $scope.message='hello';
    $scope.updateMessage = function(message){
        $scope.message = message;
    };
  }
})
