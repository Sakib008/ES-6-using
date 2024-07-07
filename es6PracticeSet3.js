// 1. Create a function that takes an array of strings as an argument and returns a string that includesthe number of items in the array and the first and last items.
    const item = ['apple','banana','orange']
    const formatArray = (arr) => `the Array has ${arr.length} items, and the first item is "${arr[0]}" and the last item is "${arr[arr.length-1]}"`;

    const message = formatArray(item);
    // console.log(message);



// 2. Create a function that takes a product object as an argument and returns a string that includes the product name, price, and a message based on whether it is in stock or not.

    const product = {
        name : 'Cup',
        price : 197,
        stock : true
    }
    const formatObj = ({name,price,stock}) => stock ? `${name} costs INR ${price} and is in Stock.` : `${name} costs INR ${price}.`;
    const messageOfProduct = formatObj(product);
    // console.log(messageOfProduct)




// 3. Write a function findPerson that takes an array of person objects and a name as parameters and returns the object with the matching name, or null if not found



const person = [
    {name:'Harun',age : 24},
    {name :'Rehan', age : 39},
    {name : 'Nafees',age: 20}
];


// will do in the evening 

// 4. Write a function that uses destructuring to extract the first two elements from an array, and returns them in an object with keys 'first' and 'second'.

    const arr1 = ['brain','eye','nose','head','tongue']

    const destructArray = (arr) => {
        const [brain,eye] = arr;
        const objArray = {value1 : brain, Value2 : eye};
        return objArray
    }
    // console.log(destructArray(arr1))



// 5. Convert the following code to ES6+ syntax with minimum number of characters.

    // function startsWithA(str) {
    //     if (str.charAt(0) === 'A') {
    //     return true
    //     } else {
    //     return false
    //     }
    //     }
        // console.log(startsWithA('Akshita'))
        // true
        // console.log(startsWithA('Jeena'))
        // false


// Answer of Convert: 

    const startsWithA = (str) => str.charAt(0) ==="A" ? true : false;
    // console.log(startsWithA('Jannat'))
    // console.log(startsWithA('Anaya'))


// 6. Write an ES6 function to return only the first character of the given array.
    const arrayCharacter = [23,2,4,2,9,3,6,5]
    const giveFirstElement = (arr) => arr[0];
    // console.log(giveFirstElement(arrayCharacter))



// 7. Write a function to return the last 5 characters as an array from the given array

    const arr2 = [1,3,5,2,4,6,9,7,8,11,16,13,12,];
    const printLastFive = (arr)=> arr.slice(-5)
    // console.log(printLastFive(arr2))


// 8. Write an ES6 function to return the second element of the given array by multiplying 20 to it.

    const printSecChar=(arr)=> arr[1]*20;
    // console.log(printSecChar([2,3,5,34,53,3,4]))


// 9. Write an ES6 function to return the second element of the given array by adding “Hello” before it

    const nameArr = ['Mohammad','Ahmed','Shameem','Tabrez','Zishan'];
    const sayHello =(arr) => 'Hello ' + arr[1];
    // console.log(sayHello(nameArr))
    // console.log(typeof sayHello(nameArr))


// 10. Write an ES6 function to return sum of all numbers at even indices of the given array.

// const evenIndex = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
// const fintEvenIndex = (arr) => {
//     for(i=0;i<arr.length;i%2){
        
//     }
// }




// 10.2 Create an array of Superhero object and print their name and costume color of every list


const superhero = [
    {
        name: 'Superman',
        costume : 'blue',
        strenth : 0
    },
    {
        name: 'Batman',
        costume : 'black',
        strenth : 1000
    },
];


    for(i=0;i<superhero.length;i++){
        const spcos = superhero[i];
        // console.log(spcos.name)
        // console.log(spcos.costume)
    }
    



// 11. Write an ES6 function to return the sum of only first 2 elements of the array .


const arrSum = [8,3,5,4,1,9,7];
const sumOfTwo = (arr) => arr[0] + arr[1];
// console.log(sumOfTwo(arrSum));
// console.log(sumOfTwo([9,8,6,7,3,4,9,10]))



// 12. Write an ES6 function to return the first element which is a multiple of 5 in the given array.

const arrayFive = [3,5,3,0,1,9,10,13,2,3,12,18];
