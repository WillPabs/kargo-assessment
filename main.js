import { mapToArray, digitsToLetters } from './utils.js';

const num = process.argv.slice(2);
num[0] = Number(num[0]);
num[1] = Number(num[1]);
num[2] = Number(num[2]);

let digits = mapToArray(num);

let answer = digitsToLetters(digits);

console.log(answer.join('\,'));