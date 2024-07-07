
// 1. Write an ES6 function that accepts an array of integers and returns the maximum element in the array. Avoid using in-built methods.


const array = [4,68,8,3,6,0,12,34];
const getMaxElement = (arr) => {
    for(i=0;i<arr.length;i++){
        const bigAr = arr[i];
        // console.log(bigAr);
        
    }
}
// console.log(getMaxElement(array))




const numbers = [2,4,9];
const root =(num)=>num*num;
const sqare = numbers.map(root);
// console.log(sqare)


const strings = ['nepG','coding','programming'];
const getLenth = (str) =>str.length;
const retGet = strings.map(getLenth)
// console.log(retGet)


const objToArr = [{name: 'tanay'},{name: 'sarik'},{name : 'Sameer'}]
const convert = ({name})=> name;
const cov = objToArr.map(convert);
// console.log(cov)

const nums = [5,20,15,40,3,30,11];
const isdivideTen = num =>num%10 ===0;
const diviFil = nums.filter(isdivideTen)
// console.log(diviFil)
const anotermap = nums.map(isdivideTen)
// console.log(anotermap)



const convertEvenToOdd = (arr) =>{
    for(let i=0;i<arr.length;i++){
        let even = arr[i];
        if(even % 2 === 0){
            even += 1; 
        }
    }
    return arr;
}

// const convertEvenToOdd = (arr) => {
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] % 2 === 0) {
//             arr[i] += 1;
//         }
//     }
//     return arr;
// }
// console.log(convertEvenToOdd([1,3,56,6,3,4,3,22,2,59]))
// const countEvens = (arr) => {
//     let count = 0;
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] % 2 === 0) {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countEvens([1, 3, 56, 6, 3, 4, 3, 22, 2, 59]));
const findMax =(arr)=>{
    let max = 0;
    for(let i = 0;i<arr.length;i++){
        max = arr[i]
        if(arr[i]<max){
            
        }
    }
}

console.log(findMax([1, 3, 56, 6, 3, 4, 3, 22, 2, 59]));
// console.log(countEvens([1, 3, 56, 6, 3, 4, 3, 22, 2, 59]));


const books= [
    {title :'The Alchemist', author : 'Paulo Coelho', pages : 197},
    {title :'The Kill a MockingBird', author : 'Harper Lee', pages : 281},
    {title :'The Great Gatsby', author : 'F. Scott Fitzgerald', pages : 247},
];

const sumPages =(acc,book)=>acc + book.pages;

const findPage = books.reduce(sumPages,0);
findPage();