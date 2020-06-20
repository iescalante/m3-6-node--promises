const rp = require('request-promise');
const { renderChuck, renderSpaceShip } = require('./renders');
const CHUCK_NORIS_API = 'http://api.icndb.com/jokes/random';

const giveMeChuckNorisJokes = () => {
  return rp(CHUCK_NORIS_API)
    .then(JSON.parse)
    .then((res) => res.value.joke);
};

// giveMeChuckNorisJokes().then((res) => console.log(res));

const getIssPosition = () => {
  return rp('http://api.open-notify.org/iss-now.json')
    .then(JSON.parse)
    .then((res) => {
      return {
        lat: res.iss_position.latitude,
        lgn: res.iss_position.longitude,
      };
    })
    .catch(console.error);
};

const whoWins = (value) => {
  if (typeof value === 'string') {
    console.log(renderChuck);
    console.log('chuck won');
  } else {
    console.log(renderSpaceShip);
    console.log('space ship won');
  }
};

const together = ([chuckJoke, issCords]) => {
  console.log(
    `The Iss is now at ${issCords.lat} and ${issCords.lgn}. While ${chuckJoke}`
  );
};

const promiseArray = [giveMeChuckNorisJokes(), getIssPosition()];

// giveMeChuckNorisJokes().then(console.log);

// promise race takes as an argument an array of promises and the .then gets the results of the first to complete
Promise.race(promiseArray).then(whoWins);

// promise race takes as an argument an array of promises and the .then gets the results in an array of resurn values
Promise.all(promiseArray).then(together);