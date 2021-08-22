
@echo off

echo. > start-server.js
echo var fs = require('fs'), http = require('http');            >> start-server.js
echo http.createServer(function (req, res) {                    >> start-server.js
echo fs.readFile(__dirname + '/dist/' + req.url, function (err,data) {     >> start-server.js
echo if (err) {                                                 >> start-server.js
echo res.writeHead(404);                                        >> start-server.js
echo res.end(JSON.stringify(err));                              >> start-server.js
echo return;                                                    >> start-server.js
echo }                                                          >> start-server.js
echo res.writeHead(200);                                        >> start-server.js
echo res.end(data);                                             >> start-server.js
echo });                                                        >> start-server.js
echo }).listen(8000);                                           >> start-server.js

@echo on

node start-server.js