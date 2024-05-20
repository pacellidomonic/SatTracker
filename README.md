# About
* App that tracks the International Space Station using node.js express and cesium
* The SatTracker uses TLE data from CelesTrak for the International Space Station.
* How the TLE data works is a description is taken from the satellites orbit and used through satellite.js to predict the future orbit of the satellite.
* There are a lot of satellites on the CelesTrak website and my code can be refactored to track any or multiple satellites.
  
<img src="https://github.com/pacellidomonic/SatTracker/assets/63662881/f1ad265b-a6b5-4931-9215-634ee1bc222e" width="400"/>

## Instructions
1. Download the repository
2. import the node modules
  a. npm - express
  b. npm - satellite
  c. npm - cesium
3. Run the webb app with "node app.js"
4. The app will track the ISS (ZARYA)

## How to use
1. Two buttons in the code for following and unfollowing the satellite
2. Unable to use the cesium fastforward/ rewind buttons using my current code

<img src="https://github.com/pacellidomonic/SatTracker/assets/63662881/4f34e515-dc29-4352-afbe-82fbb37af093" width="400"/>

## Credits
https://celestrak.org/NORAD/elements/

https://github.com/shashwatak/satellite-js

https://dev.to/omar4ur/create-a-satellite-tracker-from-scratch-in-30-lines-of-javascript-32gk
