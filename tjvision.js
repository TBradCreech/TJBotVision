var RaspiCam = require("raspicam");
var options = {
  mode: "photo",
  w: 1920,
  h: 1080,
  rot: 180,
  q: 100,
  output: "shot.jpg"
}
var photo = new RaspiCam(options);
//to take a snapshot, start a timelapse or video recording
photo.start();
