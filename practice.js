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
// console.log(printSomething(5));