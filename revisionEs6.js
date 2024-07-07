const person = {name: 'sam',age : 30};
person.age = 35;
// console.log(person.age)


const car1 = {make: 'Porsche', model : '911', horsepower : 450}
const car2 = {make: 'Toyota', model : 'Camry', horsepower : 200}

const isSportCar = ({horsepower}) => horsepower>= 300 ? true : false ;
// console.log(isSportCar(car1))
// console.log(isSportCar(car2))


const person1 = {age : 18,name :'rehan'};
const isEligible = (obj,num) => Number(obj + num) > 21 ? true : false ;
// console.log(isEligible(person1.age,5));

const blog = {
    views: 1100,
    title: 'my green',
    author : 'Mohammad'
}

const getViews = ({views}) => views >=1000 ? true : false ; 

// instead

// const getViews = ({views}) => {
//     if(views > 1000){
//         return true
//     }
//     return false
// } 

// console.log(getViews(blog))

// let a = 1;

// let b = 2;
// [a,b] = [b,a];
// console.log(a)

const add = (a=20,b=0)=> a+b;
// console.log(add(4,6));


const obj1 = {a: 1,b: 2 }
const obj2 = {c: 2,d:5 }
const combineObj = (obj1,obj2) => ({...obj1,...obj2})
// console.log(combineObj(obj1,obj2))


const person2 = {name: 'john',address : {city: 'New York',State :'NY'}}
const getData = ({name,address}) => {
console.log(name);
console.log(address.city);
}
// console.log(getData(person2))

const StrToUpperCase = (str) =>String(str).toUpperCase();
// console.log(StrToUpperCase('hello'))

const concatStr = (str1,str2) => String(str1 + str2) ; 
// console.log( typeof concatStr(4,4))


const lastElement = (arr) => arr[arr.length -1] ;
// console.log(lastElement([1,2,3,4,5,6]))

const sumFirstAndLast = (arr) => arr[0] + arr[arr.length-1]
// console.log(sumFirstAndLast([3,5,3,9]))