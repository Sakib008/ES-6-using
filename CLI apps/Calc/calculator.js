const readline = require('readline-sync');

const add =(a,b)=> a+b;
const subtract =(a,b)=>a-b;
const multiply =(a,b)=>a*b;
const divide =(a,b)=>b !== 0? a/b : `Error : Division by zero`;

const main =()=>{
    while(true){
        console.log('\nOptions : add, subtract, multiply, divide, exit');
        let choice = readline.question('Enter Choice : ')

        if(choice === 'exit'){
            console.log('Exiting.....');
            break ;
        }

        let a = parseFloat(readline.question('Enter first number : '))
        let b = parseFloat(readline.question('Enter Second number : '))
        let result ; 

        switch(choice){
            case 'add' : 
            result = add(a,b);
            break;
            case 'subtract' :
                result = subtract(a,b);
                break ;
            case 'multiply' : 
                result = multiply(a,b);
                break ;
            case 'divide' : 
                result = divide(a,b);
                break;
            default : 
                console.log('Invalid choice. Please try again.');
                continue ;
        }
        console.log(`The Result is : ${result}`)
    }
}

main();