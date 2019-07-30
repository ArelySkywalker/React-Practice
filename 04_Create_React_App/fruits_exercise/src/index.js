import foods from './foods';
import { choice, remove } from './helpers';

// List available foods
console.log(`Hello, what would you like today? Here is a list of foods we have available: \n${foods}\n\n`);

// Randomy draw a fruit from the array
let fruit = choice(foods);

console.log(`I’d like one ${fruit}, please.\n\n`);
console.log(`Here you go: ${fruit}\n\n`);
console.log(`Delicious! May I have another?\n\n`);

// Remove the fruit from the array of foods
let remaining = remove(foods,fruit);

// Print how many food there are left
console.log(`I'm sorry, we're all out of ${fruit}. We have ${remaining.length} other foods left.\n\n`);
// Print the remaining foods to choose from
console.log(`Here is a list of the remaining foods we have: \n${remaining}\n\n`);