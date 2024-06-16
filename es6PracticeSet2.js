/*  1. Create an object person with two properties, "name" and "age" and then updates the "age"
 property to a new value. Initial age should be 30 */

const person = {
    name: 'Mohammad Shamy',
    age: 30
}
//   console.log(person.age)
person.age = 35;
//   console.log(person.age)


/* 2. Write a function that takes an object car and returns true if the car is a sports car (i.e. has a
 horsepower property greater than or equal to 300) */

const car1 = {
    make: 'Porsche',
    model: '911',
    horsePower: 450
}
const car2 = {
    make : 'Toyota',
    model : 'Camry',
    horsePower : 200
}
// const isSportCar = (car) => {
//    if(car.horsePower >= 300){
//     return true
//    }
//    return false
// }
// instead =---------
const isSportCar = (car) => car.horsePower >= 300 ;
// console.log(isSportCar(car1));
// console.log(isSportCar(car2));



/* -3. Write a function that takes an object person and a number num as arguments and returns true if
the person's age plus num is greater than 21. Otherwise, it should return false */
const person1 = {
    name : 'Rehan',
    age : 20
}
const isEligible = (person,num)=> person.age + num >21 ;
// console.log(isEligible(person1,1));
// console.log(isEligible(person1,2));


/* - 4. Write a function that takes an object blog and returns true if the blog has more than 1000 views
 (i.e. has a views property greater than 1000) */

 const blog1 = {
    title : 'How to Learn JavaScript',
    author : 'John Doe',
views : 1430 ,
}
 const blog2 = {
    title : '10 Reasons to Start a Blog',
    author : 'Jane Doe',
views : 500 ,
}

const getViews= (blog) => blog.views > 1000 ;
// console.log(getViews(blog1)) ;
// console.log(getViews(blog2)) ;


/*  5. Swap the values of two variables using array destructuring */

let a = 1;
let b = 2;

[a,b] = [b,a];
// console.log(a)
// console.log(b)


/*  6. Convert this function into ES6 with least amount of characters.

 function add(a = 30, b = 0) {
 return a + b
 }
*/

const add = (a =30,b=0) => a+b;
// console.log(add(2,3));


/* 7. Write an ES6 function combineObjects with least amount of characters which merges two
 objects into one. */

 const obj1 = {a : 1, b: 2}
 const obj2 = {c : 3, d: 4}

// const combineObjects = (obj,obj2) => {
//     return {...obj,...obj2}
// }

// instead IMPLISIT Return 
const combineObjects = (obj,obj2) => ({...obj,...obj2});
const combineObj = combineObjects(obj1,obj2);
// console.log(combineObj);

// 8. Convert the function getData, into an ES6 function with last amount of characters.


 const person2 = {
  name: 'John Doe',
  address: {
    city: 'New York',
    state: 'NY',
 },
 }

 const getData =({name,address}) => {
    console.log(name)
    console.log(address.city)
 }
//  getData(person2)
 
// 9. Write a function that takes a string as input and returns the string in all uppercase letters.
const hello = 'hello my name is Sakib'
const stringToUpperCase =(str) => String(str).toUpperCase();
// console.log(stringToUpperCase(hello));


// 10. Write a function that takes two strings as input and concatenates them together.
const myFirst = 'Reality is right';
const mySec = 'But it is my best'
const concatString = (first,second) => String(first)+ ' ' + String(second);
// console.log(concatString(myFirst,mySec));


// 11. Write a function that takes an array and returns the last element in the array.

const giveary = ['ok','to','1','but',true, 'is ','the key']
const lastElement = (arr) =>arr[arr.length -1]
// console.log(lastElement(giveary));


// 12. Write a function that takes an array and returns the first element of the array

const firstElement = (arr) => arr[0];
// console.log(firstElement(giveary))


// 13. Write a function that takes an array and a number and returns the sum of first element and the number.

const theNum = 8;
const myNumArr = [1,2,3,4,5,7];

const sumArr = (arr,num) => arr[0] + num;
// console.log(sumArr(myNumArr,theNum))


// 14. Write a function that takes an array and returns the sum of first and last element

const sumFirst = (arr) => arr[0] + arr[arr.length -1]
// console.log(sumFirst(myNumArr))


// 15. Write a function that takes an object representing a person's information (name, age, occupation) and returns a template literal that includes the person's name and age in a sentence.

const person3 = {
    name: 'Saziya',
    age : 19 ,
    occupation : 'Civil Servent'
};
const person4 = {
    name : 'Sameer',
    age : 18,
    occupation : 'Car Bussiness Owner'
};
const personInfo = ({name,age}) => `${name} is ${age} years old.`
// console.log(personInfo(person3))  
// console.log(personInfo(person4))  


