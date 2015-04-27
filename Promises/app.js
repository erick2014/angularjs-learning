function getData($timeout,$q){
	return function(){

		//simulated async function
		return $q(function(resolve,reject){
			$timeout(function(){
				if( Math.round(Math.random()) ){
					resolve('data received!')
				}
				else{
					reject('oh no an error! try again');
				}
			},2000);
		})
		
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
	.finally(function(){
		console.log('Finished at:', new Date())
	})
	
})
