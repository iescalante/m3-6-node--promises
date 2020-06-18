// Exercise 1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const rp = require('request-promise');

// Returns the current position of the ISS
/*const issPosition = {
    uri:
}

function getIssPosition() {

}*/

var options = {
    uri: 'http://api.open-notify.org/iss-now.json',
    json: true // Automatically parses the JSON string in the response
};
 
rp(options)
    .then(function (results) {
        console.log(results);
    })
    .catch(function (err) {
       console.log('OOPS!', err) // API call failed...
    });