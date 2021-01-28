var express = require('express');
var app1 = express();
var port = process.env.port || 3000

app1.listen(port, () => {
  console.log("Started server on port: ", port);
});

app1.get('/', function (request, response) {
    response.contentType("application/json");
    response.send({name: "server", port: port});
})

app1.get('/1', function (request, response) {
  response.contentType("application/json");
  response.send({name: "server", port: port, path: "1"})
})

app1.get('/test', function (request, response) {
  response.contentType("application/json");
  response.send({name: "server", port: port, path: "/test"})
})

app1.get('/test/:param', function (request, response) {
  response.contentType("application/json");
  response.send({name: "server", port: port, path: "/test", params: request.params.param})
})