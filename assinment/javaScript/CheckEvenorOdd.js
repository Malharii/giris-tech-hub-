// Import the readline module
const readline = require("readline");

// Create an interface for input/output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Ask the user for input
rl.question("Enter an integer: ", (input) => {
  const number = parseInt(input);

  if (isNaN(number)) {
    console.log("Please enter a valid number.");
  } else if (number % 2 === 0) {
    console.log(`${number} is Even`);
  } else {
    console.log(`${number} is Odd`);
  }

  // Close the input stream
  rl.close();
});
