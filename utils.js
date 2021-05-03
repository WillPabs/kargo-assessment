export const Numbers = {
    0: 'Zero',
    1: 'One',
    2: 'Two',
    3: 'Three',
    4: 'Four',
    5: 'Five',
    6: 'Six',
    7: 'Seven',
    8: 'Eight',
    9: 'Nine',
};

export function mapToArray(args) {
    let digits = [];

    for (let index = 0; index < args.length; index++) {
    
    let stringNumber = args[index].toString().split('');
    digits.push(stringNumber.map(Number));
    }

    return digits;
}

export function digitsToLetters(digits) {
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
    
    return answer;
}