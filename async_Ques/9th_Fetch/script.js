
const fakeFetch=(url)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(url === 'https://example.com/api/data'){
                reject({
                    status : 500,
                    message : 'Internal Server Error'
                });
            }else{
                resolve({
                    status : 200,
                    data :{
                        message : 'Success'
                    }
                })
            };
        },2000)
    })
};

const displayOutput = document.getElementById('displayOutput');
fakeFetch('https://example.com/api/data')
.then(res=>{
    displayOutput.textContent = `status : ${res.status}, message : ${res.message}`
})
.catch(err=>{
    displayOutput.textContent = ` status : ${err.status} ,Error : Internal Server Error ! The Server crashed. Please try again in some time.`
})