# tjvision
Make your TJBot process images using Vision Recognition

## How It Works
- Snap an image from the Raspberry Pi camera
- Once the image is saved, send it to the [IBM Watson Vision Recognition API](https://www.ibm.com/watson/developercloud/visual-recognition.html)
- Get a text description back from Watson Vision Recognition
- Do stuff.

# Installation

Install Dependencies

    npm install

Rename the config_sample.js file to config.js. Open config.js using your favorite text editor (e.g nano) and update it with your Bluemix credentials for the Watson services you use.

    cp config_sample.js config.js
    nano config.js
    # enter your watson usernames, passwords and versions.
