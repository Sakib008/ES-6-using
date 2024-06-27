const people = [
    {name : 'Raj',age :28},
    {name : 'Swapnil', age : 42},
    {name : 'Anushka', age : 35},
];

// console.log(people.map(({name})=>name));

const numbers = [2,5,1,3,4];
const multiplyByFive = (num)=>num*5;
const nextNumber = numbers.map(multiplyByFive);
// console.log(nextNumber)

// 4
const books = [
    {title : 'The Great Gatsby', author : 'F. Scott Fitzgerald'},
    {title : 'To Kill a Mockingbird', author : 'Harper Lee'},
    {title : '1984', author : 'George Orwell'},
    {title : 'Pride and Prejudice', author : 'Jane Austen'},
];
const getBookTitle = ({title}) => title;
const titles = books.map(getBookTitle);
// console.log(titles);

const studentName = ['Ram','Anjali','Arpit','Bhanu Kumar','Jaya','Ankit','Shayam'];
const isFirstLetterA =(str)=>str.charAt(0) === 'A'? str : null ;
// console.log(studentName.filter(isFirstLetterA));

// 5
const productData = [
    {prodName : 'Dairy Milk', price : 10},
    {prodName : 'Dairy Milk Silk', price : 70},
    {prodName : 'Five Star', price : 50},
];
const getPrice = (obj,ruppe)=>obj.filter(objs=>objs.price>ruppe);
// console.log(getPrice(productData,40));

// console.log([1,2,4,21,14,7].find(num=>num%7===0));

const bollywoodMovies =[
    {title: 'Sholay', director : 'Ramesh Sippy', year : 1975,rating : 8.2},
    {title : 'Amar Akbar Anthony',director : 'Manmohan Desai',year : 1977,rating : 7.6},
    {title : 'Namak Halaal',director : 'Prakash Mehra',year : 1982,rating : 7.6},
    {title : 'Mr. India',director : 'Prakash Shekhar', year : 1987,rating : 7.8},
    {title : 'Qayamat Se Qayamat Tak', director : 'Mansoor Khan',year : 1988, rating : 7.6},
    {title : 'Parinda',director : 'Vidhu Vinod Chopra',year : 1989, rating :8.1},
    {title: 'Dil', director : 'Indra Kumar', year: 1990,rating: 7.8},
];

const getOldBollywoodMovies = (movie) => movie.year < 1990 && movie.rating > 8.0;

const bestOldMovies = bollywoodMovies.filter(getOldBollywoodMovies).map(movie=>movie.title);

// console.log(bestOldMovies);