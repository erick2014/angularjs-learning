angular.module('app',[]);

//create our service, called messages
angular.module('app').factory('messages',function(){
	//create and return and empty object called messages
	var messages={};
	
	messages.list=[];

	//add messages to the list
	messages.add=function(message){
		messages.list.push({id:messages.list.length,text:message});
	}

	return messages;
})