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

getAddressPosition('1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8');




