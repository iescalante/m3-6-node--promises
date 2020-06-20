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
}

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



function getDistanceFromIss(address) {
  let result1 = getAddressPosition(address);
  let result2 = getIssPosition();

  Promise.all([result1, result2])
  .then(result => {
    return getDistance(result[0], result[1]);
  })
  .then(result => console.log(result))
}

getDistanceFromIss('Adelaide, Australia');