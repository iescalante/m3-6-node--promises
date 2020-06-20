// Exercise 3 - `getAddressPosition`
// ---------------------------------
const dotenv = require('dotenv');
dotenv.config();
const DarkSky = require('dark-sky');


// Given a position (latitude and longitude), returns the position
function getCurrentTemperatureAtPosition(lat, lng) {
    const darksky = new DarkSky(process.env.DARKSKY_API_KEY);

    return darksky.latitude(lat).longitude(lng).get()
    .then(result => result.currently.temperature)
    .catch(error => console.log(error));
    } 

getCurrentTemperatureAtPosition(45.495804, -73.599676)
.then(result => console.log(result));

console.log('hello');