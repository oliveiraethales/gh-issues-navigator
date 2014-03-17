var express = require('express');
var app = express();
var issuesEngine = require('./js/issues-engine.js');
var hbs = require('hbs');

app.set('view engine', 'html');
app.engine('html', hbs.__express)
app.use(express.static(__dirname + '/js'));

app.get('/', function(req, res){
	res.render('issues');
});

app.get('/routes', function(req, res){
	res.send(app.routes);
});

var server = app.listen(3000, function() {
	console.log('Listening on port %d', server.address().port);
});