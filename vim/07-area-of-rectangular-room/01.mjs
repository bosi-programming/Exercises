import * as readline from 'node:readline/promises';
import { stdin, stdout } from 'node:process';

const rl = readline.createInterface({
  input: stdin,
  output: stdout,
});

const length = await rl.question("What is the length of the room in meters? ");
const width = await rl.question("What is the width of the room in meters? ");
rl.close();

const conversion = 0.09290304;
const squareMeters = Number(length) * Number(width);
const squareFeet = squareMeters / conversion;

console.log("The area is:");
console.log(squareMeters + " square meters");
console.log(squareFeet + " square feet");
