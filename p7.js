
const numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

const uniqueNumbers = [];
const seen = {};

for (var i = 0; i < numbers.length; i++) {
    if (!seen[numbers[i]]) {
        uniqueNumbers.push(numbers[i]);
        seen[numbers[i]] = true;
    }
}

console.log(uniqueNumbers); 
