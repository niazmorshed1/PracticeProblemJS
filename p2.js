
const checkEvenOdd = (number) => {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
};

const number = 13; 

const result = checkEvenOdd(number);
console.log("the number is : ",result);