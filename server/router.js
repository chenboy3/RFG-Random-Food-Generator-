var request = require('request');
module.exports = function(app){
	app.get('/', function(req,res){
		res.send("Hello World");
		request('http://www.google.com', function (error, response, body) {
 		 if (!error && response.statusCode == 200) {
  	  	console.log(body) // Show the HTML for the Google homepage. 
  			}
		})
	})

}