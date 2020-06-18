// Exercise 2 - `getAddressPosition`
// ---------------------------------
require('dotenv').config();

const opencage = require('opencage-api-client');

function getAddressPosition(address) {
    const requestObj = {
        key: process.env.OPENCAGE_API_KEY,
        q: address
    };

}

getAddressPosition('Montreal');



opencage.geocode({q: 'Montreal, Canada'}).then(data => {
  console.log(JSON.stringify(data));
  if (data.status.code == 200) {
    if (data.results.length > 0) {
      var place = data.results[0];
      console.log(place.formatted);
      console.log(place.geometry);
      console.log(place.annotations.timezone.name);
    }
  } else if (data.status.code == 402) {
    console.log('hit free-trial daily limit');
    console.log('become a customer: https://opencagedata.com/pricing'); 
  } else {
    // other possible response codes:
    // https://opencagedata.com/api#codes
    console.log('error', data.status.message);
  }
}).catch(error => {
  console.log('error', error.message);
});

// ... prints
// Theresienhöhe 11, 80339 Munich, Germany
// { lat: 48.1341651, lng: 11.5464794 }
// Europe/Berlin
