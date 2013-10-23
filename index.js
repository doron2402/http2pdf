var server 				= require("./server"),
	router 				= require("./router"),
	requestHandlers 	= require("./handler"),
	handle 				= {};

handle["/"] = requestHandlers.home; 
handle["/home"] = requestHandlers.home; 
handle["/generate"] = requestHandlers.generate; 


server.start(router.route, handle);