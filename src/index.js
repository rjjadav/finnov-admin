/**
 * Created by rahul j jadav on 3/25/2017.
 */
var gzippo = require('gzippo');
var express = require('express');
var logger = require('morgan');
var app = express();

app.use(logger('dev'));
app.use(gzippo.staticGzip("" + __dirname + "/dist"));
app.listen(process.env.PORT || 3000 , function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
