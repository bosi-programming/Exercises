import * as readline from 'node:readline/promises';
import { stdin, stdout } from 'node:process';

const rl = readline.createInterface({
  input: stdin,
  output: stdout,
});

const formater = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
}).format;

const price1 = await rl.question("Enter price of item 1: ");
const quantity1 = await rl.question("Enter the quantity of item 1: ");
const price2 = await rl.question("Enter price of item 2: ");
const quantity2 = await rl.question("Enter the quantity of item 2: ");
const price3 = await rl.question("Enter price of item 3: ");
const quantity3 = await rl.question("Enter the quantity of item 3: ");

const cost1 = Number(price1) * Number(quantity1);
const cost2 = Number(price2) * Number(quantity2);
const cost3 = Number(price3) * Number(quantity3);
const subtotal = cost1 + cost2 + cost3;
const subtotalString = formater(subtotal);
rl.write(`Subtotal: ${subtotalString}\n`);

const taxRate = 0.055;
const tax = subtotal * taxRate;
const taxString = formater(tax);
rl.write(`Tax: ${taxString}\n`);

const total = subtotal + tax;
const totalString = formater(total);
rl.write(`Total: ${totalString}\n`);
rl.close();
