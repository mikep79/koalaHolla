var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require( 'path' );
var port = process.env.PORT || 5000;
var index = require('./routes/index');
var addKoala = require('./routes/addKoala');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));
app.use('/', index);
app.use('/koalas', addKoala);

// Start listening for requests on a specific port
app.listen(port, function(){
  console.log('listening on port', port);
});
