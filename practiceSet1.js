// Ques= 1 

/* Write a function that takes a user's age and determines if they are old enough to vote (age 18 or
    older). */

// const isEligibleToVote = (age) => age>18 ? 'Eligible to vote ' : 'Not eligible to vote' ;
// console.log(isEligibleToVote(20));

// const isEligibleToVote = (age) => {
//     if(age>=18){
//         return 'Eligible for Vote'
//     }
//     return 'Not Eligible for Vote';
// }
// console.log(isEligibleToVote(13))


/* 2. Write a function that takes two numbers as input and determines which one is greater. */
const isGreater = (num1,num2) => num1 > num2 ? `${num1} is greater the ${num2}` : `${num2} is greater than ${num1}`;

// console.log(isGreater(2,6));

/*  3. Write a function that takes a number as input and determines if it is positive or negative. */

const checkNum = (num) => num > 0 ? 'Positive Number ' : 'Negetive Number';
// console.log(checkNum(3));
// console.log(checkNum(-8));
// console.log(checkNum(-3));


/*  4. Write a function that takes a number as input and determines if it is even or odd */

const isEvenOdd = (isEvenNum) => isEvenNum % 2 ? `${isEvenNum} is an Odd Number` : `${isEvenNum} is an Even Number `;
// console.log(isEvenOdd(4))
// console.log(isEvenOdd(49))
// console.log(isEvenOdd(5))


/*  5. Write a function that takes a string as input and determines if it contains the letter 'a' or ‘A’. */ 

const checkForAlphaA = (alpha) => {
const isAContain = String(alpha);
if(isAContain.includes('a') || isAContain.includes('A')){
    return 'Includes a'
}
return 'Does not Include a';
}

// console.log(checkForAlphaA('tanay'));
// console.log(checkForAlphaA('SAKIB'));
// console.log(checkForAlphaA('Rohit'));
// console.log(checkForAlphaA('Piyush'));




/* 6. Write a function that takes a string as input and determines if it is longer than 5 characters. */ 

const checkLength = (str) => {
const takeLength = String(str);
if(takeLength.length > 5){
    return `${takeLength} has more then 5 Characters`
    }
return `${takeLength} has less then 5 Characters`
} 

// console.log(checkLength('jipsy'));



/*  7. Write a function that takes a number as input and determines if it is between 1 and 10.  */

// const isBetweenOneAndTen = (num) => {
//     if(num> 1 && num < 10 ){
//         return true
//     }
//     return false
// }

// INSTEAD
const isBetweenOneAndTen = (num1) => num1 >1 && num1 <10 ? true : false
// console.log(isBetweenOneAndTen(8));


/* 8. Write a function that takes a string as input and determines if it contains the word "hello". */

// const includeHello = (str1) =>{
//     const isHello = String(str1);
//     if(isHello.includes('hello') || isHello.includes('HELLO') || isHello.includes('Hello')){
//         return true
//     }
//     return false
// }


// Instead 
const includeHello = (str) => String(str).toLowerCase().includes('hello');
// console.log(includeHello('hi and hello there'));



/* 9. Write a function that takes a number as input and determines if it is a multiple of 3. */

const isMultiplyOfThree = (num)=> Number(num)% 3 === 0 ;
// console.log(isMultiplyOfThree(3));
// console.log(isMultiplyOfThree(10));
// console.log(isMultiplyOfThree(312));




/* 10. Write a function which takes in a number as input and returns it after multiplying by 10. */

const multiplyByTen = (num) =>Number(num)*10 ;
// console.log(multiplyByTen(10));


/* 11. Console individual values of the product object using object destructuring. */

const product = {
    title : 'iPhone',
    price : 5999,
    description : 'The Phone is a smartphone developed by Apple'
}
const {title,price,description} = product;
//  console.log(title);
//  console.log(price);
//  console.log(description);


/* 12. Create an object book with properties title, author, and pages. Create a function getBookDetails that takes a book object as a parameter and returns if the book has more than 100 pages. */


const book = {
    title : 'my Hero',
    author : 'Md Shakib',
    page : 170 
}

const getBookDetails = ({page}) => {
    if( page > 100){
        return true
    }
    return false
}
// console.log(getBookDetails(book));



/* 13. Create a function changeOccupation that takes an object person and a string newOccupation as
 parameters, and changes the occupation property of the person object to the newOccupation.
 Log the person object to the console before and after calling the function. */

const theHero = {
    name : 'Amit',
    age : 25,
    occupation : 'Software Engineer'
}

  const changeOccupation = (person, newOccupation) => {
person.occupation = newOccupation;
return person
  }
//   console.log(changeOccupation(theHero,'tailor'))


/* 14. Given an array numbers containing the numbers 1, 2, and 3. Use array destructuring to log each
 number to the console. */

 const num = [1,2,3];
 const [a,b,c] = num;
//  console.log(a)
//  console.log(b)
//  console.log(c)


/* 15. Convert the given function into ES6 with least amount of characters. */
 /*  
 function defaultParamsFunc(a, b, c) {
    if (c === undefined) {
       c 
   = 4
    }
    return a * b * c
    }
*/

const defaultParamsFunc = (a,b,c = 4 ) => a*b*c ;
// console.log(defaultParamsFunc(3,1))
// console.log(defaultParamsFunc(3,10))