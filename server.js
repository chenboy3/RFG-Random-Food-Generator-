var express = require ('express');
var app = express();
var config = require('./server/config');
app = config.initialize(app);

app.listen(3000, function() {
	console.log("running on port 3000");
});