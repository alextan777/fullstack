var express = require('express');
var app = express();
var path = require('path');

var port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'client', 'views'));

app.get('/', function(req, res){
	res.render('index.ejs');
});

app.listen(port, function(){
	console.log('SERVER RUNNINT...PORT:' + port);
})
