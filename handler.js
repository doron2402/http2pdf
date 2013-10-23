var querystring = require("querystring");

function home(response, request, requestedParam){
	console.log('handler :: home');

	response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Home");
    response.end();

}

function generate(response, request, requestedParam){
	console.log('handler :: generate');
	var args = querystring.parse(requestedParam);
	
	function generatePdf(){
		var PDFDocument, doc;

		PDFDocument = require('pdfkit');
		doc = new PDFDocument;
		doc.font('fonts/Ayuma2yk.ttf').fontSize(25).text('get the name from server : ' + args.name, 100, 100);
		doc.font('fonts/Ayuma2yk.ttf').fontSize(25).text('id : ' + args.id, 100, 140);
		
		doc.addPage().fontSize(25).text('Here is some vector graphics...', 100, 100);
		doc.save().moveTo(100, 150).lineTo(100, 250).lineTo(200, 250).fill("#FF3300");
		doc.scale(0.6).translate(470, -380).path('M 250,75 L 323,301 131,161 369,161 177,301 z').fill('red', 'even-odd').restore();

		doc.addPage().fillColor("blue").text('id : ' + args.name, 100, 100).underline(100, 100, 160, 27, {
			color: "#0000FF"
		}).link(100, 100, 160, 27, 'http://google.com/');

		doc.write('output.pdf');

	}
	
	generatePdf();

	response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Generate");
    response.end();

}

exports.home = home;
exports.generate = generate;
