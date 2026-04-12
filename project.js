// 1. Deposit some money
// 2. Determine # of lines to bet
// 3. Collect a bet amount
// 4. Spin the slot machine
// 5. Check if the user won
// 6. Give the user their winnings
// 7. Play again?

const prompt = require("prompt-sync")();

// #1
const deposit = () => {
  while (true) {
    const depositAmount = prompt("Enter a deposit amount: ");
    const numberDepositAmount = parseFloat(depositAmount); // parseFloat takes a string and turns it into a number

    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
      console.log("Invalid deposit amount. Try again.");
    } else {
      return numberDepositAmount;
    }
  }
};

// #2
const getNumberOfLines = () => {
  while (true) {
    const lines = prompt("Enter the number of lines to bet on (1-3):  ");
    const numberOfLines = parseFloat(lines); // parseFloat takes a string and turns it into a number

    if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
      console.log("Invalid number of lines. Try again.");
    } else {
      return numberOfLines;
    }
  }
};

const depositAmount = deposit();
const numberOfLines = getNumberOfLines();
