var express = require('express');

let app1 = express();
let app2 = express();

app1.listen(3000, () => {
  console.log("Started server on 3000");
});

app2.listen(3002, () => {
  console.log("Started server on 3002");   
});


app1.get('/', function (request, response) {
    response.contentType("application/json");
    response.send({name: "server1"});
  })

app2.get('/', function (request, response) {
  response.contentType("application/json");
  response.send({name: "server2"})
})

app1.get('/1', function (request, response) {
  response.contentType("application/json");
  response.send({name: "server1", path: "1"})
})

app2.get('/1', function (request, response) {
  response.contentType("application/json");
  response.send({name: "server2", path: "1"})
})