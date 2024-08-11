import * as readline from 'node:readline/promises';
import { stdin, stdout } from 'node:process';

const rl = readline.createInterface({
  input: stdin,
  output: stdout,
})

const word = await rl.question('What is the input string? ');
rl.close();

const numberOfCharacters = word.length;

console.log(`${word} has ${numberOfCharacters} characters`);
