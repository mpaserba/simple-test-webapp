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
    response.send("Server 1")
  })

app2.get('/', function (request, response) {
response.send("Server 2")
})

app1.get('/1', function (request, response) {
  response.send("Context 1 Server 1")
})

app2.get('/1', function (request, response) {
response.send("Context 1 Server 2")
})