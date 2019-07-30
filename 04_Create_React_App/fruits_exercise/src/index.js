import foods from './foods';
import { choice, remove } from './helpers';

// Randomy draw a fruit from the arrayl
let fruit = choice(foods);

console.log(`I’d like one ${fruit}, please.`);
console.log(`Here you go: ${fruit}`);
console.log(`Delicious! May I have another?`);

// Remove the fruit from the array of fruits
let remaining = remove(foods,fruit);

console.log(`I'm sorry, we're all out. We have ${remaining.length} other foods left.`)