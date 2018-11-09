const WebSocketServer = require('ws').Server;
wss = new WebSocketServer({
port: 2000
});

wss.on('connection', function (ws) {
	ws.on('message', function (message) {
		console.log('received: %s', message);
    	var message = {
        	"background-color": "red"
    	};
		ws.send(JSON.stringify(message));
		console.log("Message was sent");
	});
});

const express = require('express');
const app = express();
const path = require('path');

app.use("/", express.static(__dirname));

app.get("/app",function (req, res) {
  res.sendFile(__dirname + "/index.html")
});
app.listen(3000, () => console.log('check localhost:3000'));
