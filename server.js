var http = require("http"); 
var url = require("url");
var listen_port = 8888;

function start(route, handle) {

  function onRequest(request, response) {

  	console.log('server - onRequest');
  	
    var pathname 			= url.parse(request.url).pathname,
    	requestedParam		= url.parse(request.url).query;

    route(handle, pathname, response, request, requestedParam);

  }//eo function onRequest
  
  http.createServer(onRequest).listen(listen_port);
  console.log("Server has started. listen: " + listen_port);

}
exports.start = start;