const { timeout, reject } = require("async");

const iDieCb =()=>console.log(`I would🚑😌😌 Die NOW`);
const iLiveCb = ()=>console.log(`I would Live 🤩🤩🥰🥰❤🎂🚄🚄 long`);
const willThanosKillMe = (name ,iDie,iLive)=> name.length%2 ===0 ? iLive() : iDie() ;
// willThanosKillMe('Md Shakib',iLiveCb,iDieCb);

// 1
const delayedGreeting =(morning) => {
    const greet = ()=>{
        morning !== 'Good Morning' && morning !== 'Good Evening' 
        ? console.log(`${morning} 🌃😐 and Nice to See You ------11`)
        : console.log(`hey! ${morning} 🤗🙂, How are you ? `);
    };
   setTimeout( greet,2000)
};

// delayedGreeting('Good Night');


// 2
const delayGreet = (greet)=>setTimeout(() => {
    console.log(`Hello Welcome to my ${greet}`)
}, 2000);
// delayGreet('Portfolio')

// 2
const delayedAddition = (num1,num2) =>setTimeout(()=>{
console.log(`The Sum of 2 Numbers is ${num1 + num2}`)
},4000);
// delayedAddition(2,3);


// 3
const delayAlert = (msg1,msg2,timeofDelay)=>setTimeout(() => {
    alert(msg1 + ',' + msg2);
}, timeofDelay);
// delayAlert('Hello','World!',3000);


// 4
const delayedLoop = (num)=>{
    for(let i = 1; i <=num;i++){
        setTimeout(()=>{console.log('Hello Dunia')},i*1000)
    }
}
// delayedLoop(3);

// 5
const fakeFetch =(msg,shouldSucceed)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(shouldSucceed){
                resolve(`message from Server : ${msg}`);
            }
            reject(`error from Server : ${msg}`)
        },3000);
    });
};
fakeFetch('hi..........',true);


console.log('reality')