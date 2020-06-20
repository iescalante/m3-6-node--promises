// Exercise 2 - `getAddressPosition`
// ---------------------------------
require('dotenv').config();

const opencage = require('opencage-api-client');

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



//getAddressPosition('Sint-Bavostraat 78 2610 Antwerpen Wilrijk Belgium'); //Histogenex
//getAddressPosition('JR Shinjuku Miraina Tower, 23F 4-1-6 Shinjuku, Shinjuku-ku, Tokyo 160-0022 '); //JR Line HQ in Japan
//getAddressPosition('2000 McGill College Ave, Montreal, Quebec H3A 3H3'); // Microsoft office in MTL
getAddressPosition('4095 Côte-des-Neiges RdMontreal, QC H3H 1W9').then((result => console.log(result))); // Studio Ghibli HQ in Japan

module.exports = {
  getAddressPosition,
}



