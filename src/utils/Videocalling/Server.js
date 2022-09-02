const express = require("express");
const path = require("path");
const http = require("http");
const app = express();
const server = http.createServer(app);
const io = require("socket.io")(server);




var bodyParser = require("body-parser")
var mongoose = require("mongoose")



// Server all the static files from www folder
app.use(express.static(path.join(__dirname, "www")));
app.use(express.static(path.join(__dirname, "icons")));
app.use(express.static(path.join(__dirname, "node_modules/vue/dist/")));

/**Added by me */
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
mongoose.connect('mongodb://localhost:27017/mydbs',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var db = mongoose.connection;

db.on('error',()=>console.log("Error in Connecting to Database"));
db.once('open',()=>console.log("Connected to Database"))
  

/*till here*/







// Get PORT from env variable else assign 3000 for development
const PORT = process.env.PORT || 3000;
server.listen(PORT, null, () => console.log("Listening on port " + PORT));

app.get("/legal", (req, res) =>
  res.sendFile(path.join(__dirname, "www/legal.html"))
);

// All URL patterns should served with the same file.
app.get(["/", "/:room"], (req, res) =>
  res.sendFile(path.join(__dirname, "www/index.html"))
);

const channels = {};
const sockets = {};

io.sockets.on("connection", (socket) => {
  const socketHostName = socket.handshake.headers.host.split(":")[0];

  socket.channels = {};
  sockets[socket.id] = socket;

  console.log("[" + socket.id + "] connection accepted");
  socket.on("disconnect", () => {
    for (const channel in socket.channels) {
      part(channel);
    }
    console.log("[" + socket.id + "] disconnected");
    delete sockets[socket.id];
  });

  socket.on("join", (config) => {
    console.log("[" + socket.id + "] join ", config);
    const channel = socketHostName + config.channel;

    // Already Joined
    if (channel in socket.channels) return;

    if (!(channel in channels)) {
      channels[channel] = {};
    }

    for (const id in channels[channel]) {
      channels[channel][id].emit("addPeer", {
        peer_id: socket.id,
        should_create_offer: false,
      });
      socket.emit("addPeer", { peer_id: id, should_create_offer: true });
    }

    channels[channel][socket.id] = socket;
    socket.channels[channel] = channel;
  });

  /*
	c
	o
	n
	n
	e
	c
	t
	i
	o
	n
	*/
	app.post("/signup",(req,res)=>{
		var name = req.body.patientName;
		var date= req.body.date;
		var patientAge = req.body.patientAge;
		var tests = req.body.tests;
		var patientGender = req.body.patientGender;
		var message = req.body.message;
	
	
		var data = {
			"name": name,
			"date" : date,
			"patientAge": patientAge,
			"tests": tests,
			"patientGender": patientGender,
			"message" : message
		}
	
		db.collection('user').insertOne(data,(err,collection)=>{
			if(err){
				throw err;
			}
			console.log("Record Inserted Successfully");
		});
	
		console.log("SIgnup  Successfully");
		// return res.redirect('signup_success.html')
	
	})

	
// app.get("/",(req,res)=>{
//     console.log("hi")
// }).listen(3000)


console.log("Listening on PORT 4000");
  /*
	d
	a
	t
	a
	b
	a
	s
	e
	*/

  const part = (channel) => {
    // Socket not in channel
    if (!(channel in socket.channels)) return;

    delete socket.channels[channel];
    delete channels[channel][socket.id];

    for (const id in channels[channel]) {
      channels[channel][id].emit("removePeer", { peer_id: socket.id });
      socket.emit("removePeer", { peer_id: id });
    }
  };

  socket.on("relayICECandidate", (config) => {
    let peer_id = config.peer_id;
    let ice_candidate = config.ice_candidate;
    console.log(
      "[" + socket.id + "] relay ICE-candidate to [" + peer_id + "] ",
      ice_candidate
    );

    if (peer_id in sockets) {
      sockets[peer_id].emit("iceCandidate", {
        peer_id: socket.id,
        ice_candidate: ice_candidate,
      });
    }
  });

  socket.on("relaySessionDescription", (config) => {
    let peer_id = config.peer_id;
    let session_description = config.session_description;
    console.log(
      "[" + socket.id + "] relay SessionDescription to [" + peer_id + "] ",
      session_description
    );

    if (peer_id in sockets) {
      sockets[peer_id].emit("sessionDescription", {
        peer_id: socket.id,
        session_description: session_description,
      });
    }
  });
});
