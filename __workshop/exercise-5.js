// Exercise 5 - `getDistanceFromIss`
// ---------------------------------
const rp = require('request-promise');

require('dotenv').config();
const opencage = require('opencage-api-client');


// Given an address (a string), returns the distance between that address and the ISS
// You'll need to use getDistance, getIssPosition and getAddressPosition
function getDistance(pos1, pos2) {
    return Math.sqrt(Math.pow(pos1.lat - pos2.lat, 2) + Math.pow(pos1.lng - pos2.lng, 2));
}

function getIssPosition() {
    return rp('http://api.open-notify.org/iss-now.json')
    .then(response => {
        const issPosition = JSON.parse(response);

        return {
            lat: issPosition.iss_position.latitude,
            lng: issPosition.iss_position.longitude,
        }
    })
    .then(data => {
        console.log(data);
        return data;
    })
    .catch(err => console.log('OOPS!', err));
}

function getAddressPosition(address) {
    const requestObj = {
        key: process.env.OPENCAGE_API_KEY,
        q: address
    };
    return opencage.geocode(requestObj)
    .then(data => {

        if (data.status.code == 200) {
          if (data.results.length > 0) {
            const place = data.results[0];
            return place.geometry;
          }
        } else if (data.status.code == 402) {
          console.log('hit free-trial daily limit');
          console.log('become a customer: https://opencagedata.com/pricing'); 
        } else {
          // other possible response codes:
          // https://opencagedata.com/api#codes
          console.log('error', data.status.message);
        }
      })
      .then(data => {
          console.log(data);
          return data;
      })
      .catch(error => {
        console.log('error', error.message);
      });
}

function getDistanceFromIss(address) {

    
}
getIssPosition();
getAddressPosition('4095 Cote-des-neiges Rd Montreal H3H 1W9');
console.log(typeof getIssPosition);
console.log(typeof getAddressPosition);
