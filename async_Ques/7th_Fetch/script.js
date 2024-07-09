const fakeFetch = ( url)=>{
    return new Promise ( (resolve,reject)=>{
        setTimeout(()=>{
            if(url=== 'https://example.com/api/chat'){
                reject({
                    status : 503,
                    data : {
                        message : 'Service Unavilable'
                    }
                });
            }else{
                resolve({
                    status : 200,
                    data : {
                        message : 'Success'
                    }
                });
            }
        },2000);
    });
};

const displayOutput = document.querySelector('#serverOutput')

fakeFetch('https://example.com/api/chat')
.then((res)=>console.log(res))
.catch((err)=>{
    if(err.status === 503){
        displayOutput.textContent = 'We are facing high demand at the moment. Please check back later in sometime.'
    };
})
