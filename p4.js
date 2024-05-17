const checkLeapYear = (year) => {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log(`${year} is a leap year.`);
    } else {
        console.log(`${year} is not a leap year.`);
    }
};

const yearCheck = 2024; 
checkLeapYear(yearCheck);


//taking user input

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// readline.question('Enter a year: ', (year) => {
//     checkLeapYear(parseInt(year));
//     readline.close();
// });

// const checkLeapYear = (year) => {
//     if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//         console.log(`${year} is a leap year.`);
//     } else {
//         console.log(`${year} is not a leap year.`);
//     }
// };
