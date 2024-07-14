const fakeFetch=(url)=>{
    return new Promise((resolve,reject)=>{
    setTimeout(() => {
        if(url === 'https://example.com/api/profile'){
            reject({
                status : 401,
                message : 'Unauthorized Access'
            });
        }else{
            resolve({
                status : 200,
                data : {
                    message : 'Success'
                }
            })
        }
    }, 2000);
})
};

const displayResponse = document.querySelector('#displayResponse');

fakeFetch('https://example.com/api/profile')
.then(res=>{
        displayResponse.textContent = `Status : ${res.status}, Message : ${res.data.message}, 😎😎😎😏😏🤠🤠 You R Robin hood, You did it ... ! Man.`
    
})
.catch(err=>{
    displayResponse.textContent=`Status : ${err.status}, Message :  ${err.message}! Looks like you are not logged in. Please login to see your profile.`

})
