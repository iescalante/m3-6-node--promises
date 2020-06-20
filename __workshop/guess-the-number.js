const inquirer = require("inquirer");
const hiddenNumber = Math.round(Math.random() * 100);
let guesses = 0;

const question = {
  type: "input",
  name: "question",
  message: "Can you guess the number, try between 1-100?",
  validate: function(value) {
    let valid = !isNaN(parseFloat(value));
    return valid || "Please enter a number";
  },
};

function guessNumber() {
  console.log(`You have ${5 - guesses} guesses left. Good Luck!`);
  guesses++;
  if (guesses < 6) {
    inquirer.prompt(question).then((answer) => {
      let number = answer.question;

      if (number > 100 || number < 0) {
        console.log("Whoa there, follow the rules :)");
      } else if (number > hiddenNumber) {
        console.log("~~~Too High! Try Again!~~~");
        guessNumber();
      } else if (number < hiddenNumber) {
        console.log("~~~Too Low! Try Again!~~~~");
        guessNumber();
      } else {
        console.log("*****Congratulations, you win!*****");
      }
    });
  } else {
    console.log(`-----Oh well.... Nice try, the hidden number was ${hiddenNumber}-----`);
  }
}

guessNumber();

