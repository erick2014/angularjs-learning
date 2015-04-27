function getData($timeout,$q){
	return function(){

		var defer=$q.defer();
		
		//simulated async function
		$timeout(function(){
			var random=Math.round( Math.random() );
			if( Math.round( Math.random() ) ){
				defer.resolve('data received')
			}
			else{
				defer.reject('oh no an error! try again')
			}
		},2000)
		
		return defer.promise
	}
}

angular.module('app',[])
.factory('getData',getData)
.run(function(getData){
	var promise=getData().then(function(string){
		console.log("result was= ",string);
	},function(error){
		console.error("result was= ",error);
	})
	
})
