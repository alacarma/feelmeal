var express = require('express');
var app = express();
var feelMealAction = require('./feelMealActionsController');
var port = process.env.PORT || 3000;

app.set('port', port);
app.use('/',express.static('./public'));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.set("Content-Type", "application/json");
  next();
});

app.get('/ws_todo/getActionsData', feelMealAction.getData);
app.get('/ws_todo/saveActionsData', feelMealAction.saveData);

app.listen(port);

console.log("service is listening on port" + port);