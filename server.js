var express = require('express');
var mongojs = require('mongojs');
var db = mongojs('restaurantTracker',['client']);

var app = express();

app.use(express.static( __dirname +"/src"));

console.log(__dirname);

/*app.get('/clientList', function (req, res) {

	db.client.find(function(err, docs){
		console.log(docs);
	});
})*/

/*getData = function(){
	db.client.find(function(err, docs){
		console.log(docs);
	});
}*/

//getData();

app.listen(8000);
console.log("server running on port 8000");