var RaspiCam = require("raspicam");
var options = {
  mode: "photo",
  w: 180,
  output: "bingo.jpg"
}
var photo = new RaspiCam(options);
//to take a snapshot, start a timelapse or video recording
photo.start( );
