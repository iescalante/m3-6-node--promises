const inquirer = require('inquirer');
// const hiddenNumber = (Math.round(Math.random()*100));
const hiddenNumber = 10;

console.log('Guess the number from 1 to 100! You have 5 guesses.');

const requireNumber = value => {
    if (value === hiddenNumber) {
      return true;
    }
  
    return 'Try again';
  };
  
  inquirer
    .prompt([
      {
        type: 'number',
        message: 'Guess the number, first try',
        name: 'try 1',
        validate: requireNumber
      },
      {
        type: 'number',
        message: 'Guess the number, second try',
        name: 'try 2',
        validate: requireNumber
      },
      {
        type: 'number',
        message: 'Guess the number, third try',
        name: 'try 3',
        validate: requireNumber
      },
      {
        type: 'number',
        message: 'Guess the number, fourth try',
        name: 'try 4',
        validate: requireNumber
      },
      {
        type: 'number',
        message: 'Guess the number, fifth try',
        name: 'try 5',
        validate: requireNumber
      },
      
    ])
    .then(answers => console.log(JSON.stringify(answers, null, '  ')));