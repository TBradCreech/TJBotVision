# tjvision
Make your TJBot process images using Vision Recognition

## How It Works
- Snap an image from the Raspberry Pi camera
- Once the image is saved, send it to the [IBM Watson Vision Recognition API](https://www.ibm.com/watson/developercloud/visual-recognition.html)
- Get a text description back from Watson Vision Recognition
- Do stuff.

## Installation

Install Dependencies

    npm install
    # try sudo npm install if you encounter permission issues

Rename and update config.js

    cp config_sample.js config.js
    nano config.js

    # Rename the config_sample.js file to config.js. Open config.js using your favorite text editor # (e.g // nano) and update it with your Bluemix credentials for the Watson services you use.


Enable camera

    sudo raspi-config
    # Go to option 5 "Enable Camera" and select yes

## License
MIT License
