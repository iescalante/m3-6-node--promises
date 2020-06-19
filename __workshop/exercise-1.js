// Exercise 1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.

const rp = require('request-promise');


// Returns the current position of the ISS


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

getIssPosition();

module.exports = {
    getIssPosition,
}
/*var options = {
    uri: 'http://api.open-notify.org/iss-now.json',
    json: true // Automatically parses the JSON string in the response
};
 
rp(options)
    .then(function (results) {
        console.log(results);
    })
    .catch(function (err) {
       console.log('OOPS!', err) // API call failed...
    });*/