const inquirer = require('inquirer');
const hiddenNumber = (Math.round(Math.random()*10));
console.log(hiddenNumber);
let tries = 5;

const output = [];

const question = {
    type: 'input',
    name:'guess',
    message: 'What is the number from 1 to 10?',
};




function ask() {
    console.log(`Guess the number from 1-10. You have ${tries} tries`);
    
    if (tries < 6) {
        inquirer.prompt(question).then(answer => {
            if (answer > 10 || answer < 0) {
                console.log('Come on, follow the rules now :)');
                tries--;
                guessNumber();
            }
            else if (answer > hiddenNumber) {
                console.log('Too high! Try again!');
                tries--;
                guessNumber();
            }
            else if (answer < hiddenNumber) {
                console.log('Too low! Try again!');
                tries--;
                guessNumber();

            } else {
                console.log('You did it! Congrats!');
            }

        })
    } else if (tries === 0) {
        console.log('Sorry! Out of tries :(');
    }
}

ask();

