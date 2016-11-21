/**
* Author : Victor Dibia
* Title : TJVision ... nodejs to capture and i
*/

var VisualRecognitionV3 = require('watson-developer-cloud/visual-recognition/v3');
var fs = require('fs');
var RaspiCam = require("raspicam");
var config = require("./config");

var visual_recognition = new VisualRecognitionV3({
  api_key: config.VisionKey,
  version_date: config.VisionVersion
});

// Setup image options- height, width, rotation etc.
var options = {
  mode: "photo",
  w: 1920,
  h: 1080,
  rot: 180,
  q: 100,
  output: "shot.jpg"
}

var snapinterval =  3000 ; // take a picture every X milliseconds

var camera = new RaspiCam(options);
//to take a snapshot, start a timelapse or video recording
camera.start();

//listen for the "read" event triggered when each new photo/video is saved
camera.on("read", function(err, filename){
  //do stuff
  console.log("image saved")
  //processImage("shot.jpg")
});

/**
 * [processImage send the given image file to Watson Vision Recognition for Analysis]
 * @param  {[type]} imagefile [description]
 * @return {[type]}           [description]
 */
function processImage(imagefile){
  var params = {
    images_file: fs.createReadStream(imagefile)
  };

  visual_recognition.classify(params, function(err, res) {
    if (err){
      console.log(err);
    } else {
      console.log("================\n",JSON.stringify(res, null, 2));
    }
  });

}
