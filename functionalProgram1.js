/* -------Immutablity of Code -------*/

const myMother = {mother : 'Rubina', age : 19};
const sibling = {...myMother, age : myMother.age-3};
// const sibling = myMother;
// sibling.age = myMother.age-3;
// console.log(myMother )

const color = ['red ','blue','green','yellow','pink'];
const addColor = [...color,'black','voilet']
// console.log(color)
// console.log(addColor)


/* ---- Pure Functions -----*/

const person = {name :'Arman',age: 19}
// const birthday =({name,age})=>({name, age : age+ 1});
const birthday =(person)=>({...person, age : person.age+ 1});
// console.log(person)
// console.log(birthday(person))


const product = {name: 'car',quantity : 6};
const increaseStock=(product)=>({...product,quantity : product.quantity + 5});
// console.log(increaseStock(product))






/* ----------Practice 1 -------- */

// 1
const numbers = [1,3,5,9,7,8,6,4,2];
const incrementNumber = (arr)=> arr.map(number=>number + 3);
// console.log(incrementNumber(numbers))

// 2
const fruit = ['apple','mango','orange','papaya','banana'];
const capitalizeString =(arr)=>arr.map(str=>str.toUpperCase());
// console.log(capitalizeString(fruit))

// 3
const people = [{name: 'harun',age: 19},
    {name:'Prabhat',age: 21},
    {name:'Uttam',age : 35}
];
const findAge = (arr)=>arr.map(obj=>obj.age);
// console.log(findAge(people));


// 4
const products = [
    {name: 'Lip Balm', stock : 100},
    {name : 'PERFUME', stock : 400},
    {name: 'Socks', stock : 200}
]
const nameToLowercase = (arr)=> arr.map(str =>str.name.toLowerCase());
// console.log(nameToLowercase(products))

// 5
const cities = [
    {name: 'New York', population : 8538000},
    {name :'Los Angeles', population : 3976000},
    {name: 'Banglore', population : 13608000},
];
const extractName = (arr)=> arr.map(obj=>obj.name);
// console.log(extractName(cities));


// 6
const vegitable = ['Potato','lady','Spring Onion','onion','Brinjal'];
const filterLongString = (arr)=>arr.filter(str=>str.length>5);
// console.log(filterLongString(vegitable));

// 7
const number = [2,3,5,15,30,21];
const isDivisibleBy3and5 =(arr)=>arr.filter(num=>num%3 ===0 && num%5===0)
// console.log(isDivisibleBy3and5(number))

// 8
const people1 = [
    {name : 'Ramazan',age : 30},
    {name : 'Meherbaan', age : 44},
    {name : 'Dilshad', age : 34},
    {name : 'Saurabh', age: 26},
]
const filterByAge =arr=>arr.filter(obj=>obj.age > 30);
// console.log(filterByAge(people1))

// 9 
const students = [
    {name: 'Imtiyaz', score : 48},
    {name: 'Rehan', score : 98},
    {name: 'Mehndi', score : 81}
];
const isScoreAbove80 =arr=>arr.filter(obj=>obj.score > 80);
// console.log(isScoreAbove80(students))

// 10
const people2 = [
    {name : 'Meraj',age: 48,city :'Delhi'},
    {name: 'Mohan',age: 71,city : 'Indore'},
    {name: 'Praful', age: 89, city: 'Indore'},
    {name: 'Daulat', age :77, city : 'Fatehpur'},
];
const filterByCityAndAge = arr=>arr.filter(obj=>obj.city === 'Indore' && obj.age>70);
// console.log(filterByCityAndAge(people2))

// 11
const books = [
    {title: 'The Hand',author : 'Douglas Adams',genre : 'Science Fiction'},
    {title: 'To Kill a Mockingbird', author : 'Harper Lee',genre : 'Fiction'},
    {title : '1984', author : 'George Orwell', genre : 'Science Fiction'},
    {title : 'Pride and Prejudice', author : 'Jane Austen', genre : 'Romance'},
];
const filteredBooks = arr=>arr.filter(obj=>obj.genre === 'Science Fiction');
// console.log(filteredBooks(books))

// 12
const employees = [
    {name: 'Murad',age: 25,salary : 25000},
    {name: 'Muskan',age : 27,salary : 21000},
    {name: 'Samrat',age : 39 , salary : 31000},
];
const filterBySalary = arr=>arr.filter(obj=>obj.salary > 22000);
// console.log(filterBySalary(employees));