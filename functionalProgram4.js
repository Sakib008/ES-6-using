// 1
const strings = ['apple','banana','cherry','date','blueberry'];
const totalLength = (string)=> string.reduce((totalLength,str)=>totalLength + str.length,0);
// console.log(totalLength(strings))

// 2
const numbers  =[1,2,3,4,5];
const sumSquares =(number)=>number.reduce((sumOfSquare,square)=>sumOfSquare + (square*square),0);
// console.log(sumSquares(numbers))

// 3

const items = [
    {name: 'Item 1', price : 10},
    {name : 'Item 2',price : 20},
    {name : 'Item 3',price : 30},
];
const totalValue = (product)=>product.reduce((sumOfAll, value) => sumOfAll + value.price,0);
// console.log(totalValue(items))

// 4
const concatStrings = (string)=> string.reduce((concatStr,str)=>concatStr + str);
// console.log(concatStrings(['this ','is ','fun ']))

// 5

const numbers1 = [1,2,3,4,5];
const multiplyElement = (number)=>number.reduce((multiplyNumber, currentNum)=>multiplyNumber*currentNum)
// console.log(multiplyElement(numbers1))

// 6
const string1 = ['neogcamp','Haule Haule','code','Batman','Awesome'];
const longestString = string=>string.reduce((longest,current)=> longest.length > current.length ? longest : current)
// console.log(longestString(string1));

// 7
const people = [
    {name: 'Jeena',age : 25},
    {name: 'Priya',age : 30},
    {name : 'Naina',age : 45},
];
const oldestPersonName = (person)=>{
const personName = person.reduce((oldest, current) => oldest.age > current.age ? oldest : current);
return personName.name
};

// console.log(oldestPersonName(people))

// 8
const people1 = [
    {name : 'Alice', age : 25},
    {name : 'Bob', age : 30},
    {name : 'Charlie',age : 35},
    {name : 'David',age  :40},
];
const getAverageAge = (person)=> person.reduce((average,current)=>average +current.age,0)/person.length;
// console.log(getAverageAge(people1))

// 9
const products = [
    { name: 'Bread', price: 10, quantity: 2 },
    { name: 'Slipper', price: 40, quantity: 3 },
    { name: 'Clips', price: 20, quantity: 5 },
    { name: 'Knife', price: 30, quantity: 1 },
];
// console.log(products.reduce((maxValue,value)=>value.price>maxValue.price? value : maxValue,products[0]));


