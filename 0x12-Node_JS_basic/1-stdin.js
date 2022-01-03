const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

rl.question('Welcome to Holberton School, what is your name? ', (answer) => {
  // stdout response
  console.log(`Your name is: ${answer}`);
  console.log('This important software is now closing');

  rl.close();
});
