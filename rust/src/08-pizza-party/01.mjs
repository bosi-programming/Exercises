import * as readline from 'node:readline/promises';
import { stdin, stdout } from 'node:process';

const rl = readline.createInterface({
  input: stdin,
  output: stdout,
});

const people = await rl.question("How many people? ");
const pizzas = await rl.question("How many pizzas do you have? ");
rl.close();

const totalSlices = pizzas * 8;
const slicesPerPerson = Math.floor(totalSlices / people);
const leftover = totalSlices % people;

console.log(`\n${people} with ${pizzas} pizzas`);
console.log(`Each person gets ${slicesPerPerson} piece of pizza.`);
console.log(`There are ${leftover} leftover pieces.`);
