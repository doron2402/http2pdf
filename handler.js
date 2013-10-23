var querystring = require("querystring");
pdfGenerator = require("./pdf_generator");

function home(response, request, requestedParam){
	console.log('handler :: home');

	response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Home");
    response.end();

}

function generate(response, request, requestedParam){
	console.log('handler :: generate');
	var args = querystring.parse(requestedParam);
	

	pdfGenerator.pdfGenerator(response, request, args);

}

exports.home = home;
exports.generate = generate;
