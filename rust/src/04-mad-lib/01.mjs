import * as readline from 'node:readline/promises';
import { stdin, stdout } from 'node:process';

const rl = readline.createInterface({
  input: stdin,
  output: stdout,
})

const noun = await rl.question('Enter a noun: ');
const verb = await rl.question('Enter a verb: ');
const adjective = await rl.question('Enter an adjective: ');
const adverb = await rl.question('Enter an adverb: ');
rl.close();

console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarous!`);
