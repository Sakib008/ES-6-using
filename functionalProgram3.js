const cars1 = [
    {make : 'Toyota', model : 'Corolla', year : 2010},
    {make : 'Honda', model : 'Civic', year : 2012},
    {make : 'Toyota', model : 'Camry', year : 2015},
    {make : 'Ford', model : 'Mustang', year : 2018}
];
const findToyotaCar =carFind=>carFind.find(car=>car.make==='Toyota');
// console.log(findToyotaCar(cars1));

const products = [
    {name:'Toothbrush',price : 29,category: 'health'},
    {name: 'Coffee Maker',price: 99,category: 'home'},
    {name: 'iPad',price: 799, category: 'electronics'},
    {name: 'Smartwatch',price: 199, category : 'electronics'},
];
// const findElectronicsProduct = (myProduct) =>myProductProduct.find(product=>product.category==='electronics');
// const electronicsProduct = findElectronicsProduct(products);
// console.log(electronicsProduct);

// 5
const getAllElectronicProduct = myProduct=>myProduct.filter(product=>product.category==='electronics');
const electronicsProduct = getAllElectronicProduct(products);
// console.log(electronicsProduct);

// 6
const books1=[
    {title : 'The Lord of the Rings',
        author: 'J.R.R. Tolkien',
        pageCount : 1178,
    },
    {title : 'To KIll A Mockingbird',author : 'Harper Lee', pageCount : 281},
    {
        title : "The hitchhiker's Guide to the Galaxy",
        author: 'Douglas adams',
        pageCount : 193,
    },
    {
        title : 'The Name of the Wind',
        author: 'Patrich Rothfuss',
        pageCount : 662,
    },
];
const findBookWithMoreThen500Pages = (book)=>book.find(obj=>obj.pageCount>500);
const bookWithMoreThan500Pages  = findBookWithMoreThen500Pages(books1);
// console.log(bookWithMoreThan500Pages);

// 7
const customers = [
    {name: 'John',age : 25, gender : 'Male'},
    {name : 'Jane',age : 30,gender : 'Female'},
    {name: 'Bob',age: 40,gender : 'Male'},
    {name: 'Alice',age : 35,gender : 'Female'},
];
const getMaleCustomers = (maleCustomer)=>maleCustomer.filter(obj=>obj.gender==='Male');
const maleCustomer = getMaleCustomers(customers);
// console.log(maleCustomer)

// 8
const games = [
    {
       title: 'The Witcher 3: Wild Hunt',
       developer: 'CD Projekt Red',
       genre: 'RPG',
    },
    {
       title: 'Grand Theft Auto V',
       developer: 'Rockstar North',
       genre: 'Action',
    },
    { title: 'Portal 2', developer: 'Valve Corporation', genre: 'Puzzle' },
    {
       title: 'The Legend of Zelda: Breath of the Wild',
       developer: 'Nintendo',
       genre: 'Adventure',
    },
    ];
    const filterByGenre  = (gen,nameOfGenre)=>gen.filter(gen=>gen.genre===nameOfGenre);
    const filteredGames=filterByGenre(games,'RPG');
    // console.log(filteredGames)

    // 09
    const cars = [
        { make: 'Toyota', model: 'Corolla', year: 2010 },
       { make: 'Honda', model: 'Civic', year: 2012 },
        { make: 'Toyota', model: 'Camry', year: 2015 },
        { make: 'Ford', model: 'Mustang', year: 2018 },
        ]
const getCarModel=car=>car.filter(obj=>obj.year>2012).map(obj=>obj.model);
const carModels = getCarModel(cars);
// console.log(carModels);

// 10
const books = [
    {
       title: 'The Lord of the Rings',
       author: 'J.R.R. Tolkien',
       pageCount: 1178,
    },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', pageCount: 281 },
    {
       title: "The Hitchhiker's Guide to the Galaxy",
       author: 'Douglas Adams',
       pageCount: 193,
    },
    {
       title: 'The Name of the Wind',
       author: 'Patrick Rothfuss',
       pageCount: 662,
    },
    ];
    
    const getTitleWithMoreThan700Pages= getBook=>getBook.filter(book=>book.pageCount>700).map(book=>book.title);
    const bookWith700Pages=getTitleWithMoreThan700Pages(books)
    // console.log(bookWith700Pages)

    // 11


const array = [1,2,3,4,5,6,7];
const sumOfOddInd = (accumulator,currentValue)=>currentValue%2 !==0 ? accumulator + currentValue : accumulator;
// console.log(array.reduce(sumOfOddInd))

// 11 part 2
const numbers = [12,23,4,2,11,21];
const sumOfEvenNumbers = (number,curIndex)=>number.reduce((acc,curVal,curInd)=>curVal %2===0? acc + curVal : acc);
const evenNumbers = sumOfEvenNumbers(numbers);
// console.log(evenNumbers);

// 12

const students = [
    { name: 'John', score: 80 },
    { name: 'Jane', score: 90 },
    { name: 'Bob', score: 75 },
    { name: 'Alice', score: 85 },
    ];
const getAverageScore = (candidate)=> candidate.reduce((accumulator,student)=>accumulator+student.score,0)/candidate.length;
// console.log(getAverageScore(students))

const strings= ['hello',' ','world','!'];
const concatinateStrings= (string)=>string.reduce((accumulator,str)=>accumulator + str);
// console.log(concatinateStrings(strings))

const numbers1=[10,5,8,3,6];
const getMinimumNumber = (number)=>number.reduce((acc,minNum)=>minNum<acc ? minNum : acc)
// console.log(getMinimumNumber(numbers1));
