import * as readline from 'node:readline/promises';
import { stdin, stdout } from 'node:process';

const rl = readline.createInterface({
  input: stdin,
  output: stdout,
});

const length = await rl.question("What is the length of the room? ");
const width = await rl.question("What is the width of the room? ");
rl.close();

const area = length * width;
const gallonCover = 30;
const gallons = Math.ceil(area/gallonCover);

stdout.write(`You'll need to purchase ${gallons} of paint to cover ${area} square meters.`);
