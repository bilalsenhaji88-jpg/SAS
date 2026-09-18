const prompt = require('prompt-sync')();

const name = prompt('What is your name?');
const color = prompt('What is your favorite color?');

console.log(`Hello ${name}! Your favorite color is ${color}. `);