import { Numbers } from './utils.js';

const num = process.argv.slice(2);
num[0] = Number(num[0]);
num[1] = Number(num[1]);
num[2] = Number(num[2]);


let digits = [];

for (let index = 0; index < num.length; index++) {
    
    let stringNumber = num[index].toString().split('');
    digits.push(stringNumber.map(Number));
    
}

let answer = [];
let keys = Object.keys(Numbers);

for (let i = 0; i < digits.length; i++) {

    let numWord = '';

    for (let j = 0; j < digits[i].length; j++) {

        if (isNaN(digits[i][j])) {

            numWord += 'NaN';
            break;

        } else if (digits[i][j] == keys[digits[i][j]]) {

            numWord += (Numbers[digits[i][j]]);            

        }
    }

    answer.push(numWord);

}

console.log(answer.join('\,'));
