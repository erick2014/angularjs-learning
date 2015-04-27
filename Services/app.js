angular.module('app',[]);

//create a controller called ListCtrl that injects our messages service, and exposes 
//the list from our service to our view.
angular.module('app').controller("ListCtrl",['messages', 
	function(messages){
		var self=this;
		self.messages=messages.list;
	}
])

angular.module('app').controller("PostCtrl",['messages',
	function(messages){
		var self=this;
		self.newMessage="Hello world";
		self.addMessage=function(message){
			messages.add(message);
			self.newMessage="";
		}
	}
]);

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