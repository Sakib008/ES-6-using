// es5 


// const isOne = num => num ==1;

// variable hosting in function 


let a = 100;
function App(){
    let a = 50;
    console.log('2  IS  '+ a)
    {
        let a = 40;
    }
    console.log('3 IS  ' + a);
}
// App()

function Something(){
    console.log(a)
    var a= 50 ;
}
// Something()


const obj1 = {a:1,b:2};
obj1.a = 22;
// console.log(obj1)




function isOne(num){
num == 1;
return
}

// console.log(isOne(12));

const isBigger = (a,b) => a>b;
// console.log('is bigger then b ? ' + isBigger(3,2));

const printSomething = a =>{
    console.log('Sqare a //...........');
    return a*a;
}
console.log(printSomething(5));


// 5. Const with objects

const obj = {a: 1, b: 2}
obj.a = 22;


// will get error ( declaration again)
const obj2 = {a:3, b:4}
// obj1 = obj2 ;
// console.log(obj1)

function getNum(){
    return 2;
}
// console.log(getNum())


// console.log(isBigger(3,2))



// rest Example 
const rest = (a, ...rest)=>{
    console.log(a,rest);
}
// console.log(1,3,2,3,4,5,6,7,89,0,2);


// Rest Example with Array
const array = [1,2,4,5,7,9,9,0,1,2,4];
const spreadOperator = ([first,second,...rest]) =>{
    console.log(first,second,rest)
}
console.log(spreadOperator(...array,11,2,33,334,53,34,53,22,13));
