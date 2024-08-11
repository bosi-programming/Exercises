import * as readline from 'node:readline/promises';
import { stdin, stdout } from 'node:process';

const rl = readline.createInterface({
  input: stdin,
  output: stdout,
})

const currentAge = await rl.question('What is you current age? ')
const ageToRetire = await rl.question('At what age would you like to retire? ')
rl.close();

const currentYear = new Date().getFullYear();
const currentAgeNum = Number(currentAge);
const ageToRetireNum = Number(ageToRetire);

const yearsUntilRetire = ageToRetireNum - currentAgeNum;
const yearThatWillRetire = currentYear + yearsUntilRetire;

console.log(`You have ${yearsUntilRetire} years left until you can retire.`)
console.log(`It's ${currentYear}, so you can retire in ${yearThatWillRetire}`)

