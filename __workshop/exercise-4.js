// Exercise 4 - `getCurrentTemperature`
// -----------------------------------
require('dotenv').config();

const opencage = require('opencage-api-client');
const DarkSky = require('dark-sky');

// Given an address as a string, returns the temperature
// Use the getCurrentTemperatureAtPosition function
function getAddressPosition(address) {
    const requestObj = {
        key: process.env.OPENCAGE_API_KEY,
        q: address
    };
    return opencage.geocode(requestObj)
    .then(data => {
            const place = data.results[0];
            return place.geometry;
          })
} 

function getCurrentTemperatureAtPosition(lat, lng) {
    const darksky = new DarkSky(process.env.DARKSKY_API_KEY);

    return darksky.latitude(lat).longitude(lng).get()
    .then(result => result.currently.temperature)
    .catch(error => console.log(error));
    } 

function getCurrentTemperature(address) {
    return getAddressPosition(address)
    .then(result => {
        // console.log('this is the result:' , result)
        return getCurrentTemperatureAtPosition(result.lat, result.lng);
    })
    .then(result => console.log(result));

}
console.log(getCurrentTemperature('4095 Côte-des-Neiges RdMontreal, QC H3H 1W9'));