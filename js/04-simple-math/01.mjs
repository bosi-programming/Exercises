import * as readline from 'node:readline/promises';
import { stdin, stdout } from 'node:process';

const rl = readline.createInterface({
  input: stdin,
  output: stdout,
});

const firstNumber = await rl.question("What is the first number? ");
const secondNumber = await rl.question("What is the second number? ");
rl.close();

const first = Number(firstNumber);
const second = Number(secondNumber);
const add = first + second;
const subtract = first - second;
const multiply = first * second;
const divide = first / second;

console.log(`${firstNumber} + ${secondNumber} = ${add}`);
console.log(`${firstNumber} - ${secondNumber} = ${subtract}`);
console.log(`${firstNumber} * ${secondNumber} = ${multiply}`);
console.log(`${firstNumber} / ${secondNumber} = ${divide}`);
