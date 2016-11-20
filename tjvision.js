var RaspiCam = require("raspicam");
var options = {
  mode: "photo",
  w: 1920,
  h: 1080,
  rot: 180,
  q: 100,
  output: "shot.jpg"
}
var camera = new RaspiCam(options);
//to take a snapshot, start a timelapse or video recording
camera.start();

//listen for the "read" event triggered when each new photo/video is saved
camera.on("read", function(err, filename){
	//do stuff
	console.log("image saved")
});
