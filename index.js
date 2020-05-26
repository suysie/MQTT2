var app = require('express')();
var http = require('http').createServer(app);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/' + 'index.html');
});

var port = 3000;
http.listen(port, () => {
  console.log(`listening on port: ${port}`);
});