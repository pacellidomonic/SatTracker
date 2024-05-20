const express = require('express');
const path = require('path');
const app = express();

//define the path to the Cesium library
const cesiumPath = path.join(__dirname, 'node_modules', 'cesium');

//serve static files from the Cesium library
app.use(express.static(path.join(cesiumPath, 'Build', 'Cesium')));

//serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

server = app.listen(5000, function () {
    console.log("Express App running at http://127.0.0.1:5000/");
});

//---------------------------------------

//satellite.js
const satellite = require('satellite.js');
const fs = require('fs');

//read the JSON file
const jsonData = fs.readFileSync('iss_data.json', 'utf8');

//parse the JSON data
const satelliteData = JSON.parse(jsonData);

//get the TLE from JSON data
ISS_TLE = satelliteData[1].TLE;

//initialize the satellite record
const satrec = satellite.twoline2satrec(
    ISS_TLE.split('\n')[0].trim(),
    ISS_TLE.split('\n')[1].trim()
);

//create new date and get position of satellite
app.get('/satellite-position', (req, res) => {

    const date = new Date();
    const positionAndVelocity = satellite.propagate(satrec, date);
    const gmst = satellite.gstime(date);
    const position = satellite.eciToGeodetic(positionAndVelocity.position, gmst);

    //log satellites position
    console.log(satelliteData[0]["OBJECT NAME"]);
    console.log(position.longitude);// in radians
    console.log(position.latitude);// in radians
    console.log(position.height);// in km

    res.json({
        longitude: position.longitude,
        latitude: position.latitude,
        height: position.height
    });
});

app.use(express.static('public'));