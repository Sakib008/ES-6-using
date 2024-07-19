let count = 10;
const readline = require('readline-sync');
// while(count<5){
//     console.log(count);
//     count++
//     count++
//     console.log('count : ' + count)
//     console.log('count++ : ' + count++)

// }


// ------CountDown Timer ----

//  const timeOut = setInterval(() => {
//     count-- ; 
//     console.log(count);

//     if(count<=0){
//         clearInterval(timeOut);
//         console.log('Countdown Finished😊😊')
//     }
//  }, 100);



// -----User Input Validation ------

// let number = parseInt(readline.question('Enter a Number b/w 1 to 10 : '));
// while (number > 1 || number < 10) {
//     number = parseInt(readline.question('Enter a Number b/w 1 to 10 : '), 10);
//     if (typeof (number) === 'string') {
//         console.log('You have Entered String Please enter Number')
//     } else {
//         console.log('Number not in the range. Please enter a number between 1 and 10.');
//     }

// }

// console.log(`U have Enter : ${number}`);


// let number = parseInt(readline.question('Enter a Number b/w 1 to 10 : '), 10);

// while (number < 1 || number > 10 || isNaN(number)) {
//     if (isNaN(number)) {
//         console.log('You have entered a string. Please enter a number.');
//     }
//     number = parseInt(readline.question('Enter a Number b/w 1 to 10 : '), 10);
// }

// console.log(`You have entered: ${number}`);


// -------Sum Of Numbers ----------


// Write a program that sums up numbers entered by the user. The user can stop entering numbers by typing 0.

// let targetNumber = 0;
// let sumUpNumber = parseFloat(readline.question('Enter the Number to Sum Up and ( 0 for Exit) :  '));
// while(true){
//     if(sumUpNumber === 0){
//         break;
//     };
//     targetNumber += sumUpNumber;
//     sumUpNumber = parseFloat(readline.question('Enter a Number (0 to stop) : '))

// }

// console.log(`The Sum of Your Number is ${targetNumber}`);


// ---------Password Prompt ---------

// Write a program that asks the user to enter a password. If the password is incorrect, prompt the user to enter it again until they get it right.

// let enteredPassword = readline.question('Enter a Password : ');
// const myPassword = 'Rehan@123';
// while(enteredPassword !== myPassword){
//     console.log('You Have Entered the Wrong Password 🤕🤕');
//     enteredPassword = readline.question('Enter the Right Password : ');
// }
// console.log('Now You have entered the right password');


// -------- Multiplication Table ----------

// let numberForTable = 4;
// let multiplyTime = 1;
// while(multiplyTime <= 10 ){
//     console.log(numberForTable*multiplyTime)
//     multiplyTime++
// };


// -------- Even Numbers ---------
// Write a program that prints all even numbers between 1 and 50 using a while loop.


// let range1 = 1;
// let range2 = 50;

// while(range1<=range2){
//     range1++;
//     if(range1%2 === 0){
//         console.log(range1);
//     }
// };

