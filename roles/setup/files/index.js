var http = require("http");
var server = http.createServer(function(req,res){
    res.writeHead(200);
    res.end("Heloo world");
});

server.listen(3000);