const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (url === 'https://example.com/api/profile/NC002') {
                resolve({
                    status: 200,
                    data: {
                        message: 'Success',
                        data: { id: 'NC002', name: 'Rosan', institute: 'neoG Camp' }
                    }
                });
            } else {
                reject({
                    status: 400,
                    message: 'Resource Not Found'
                });
            }
        }, 2000)
    });
};

const displayOutput = document.querySelector('#displayOutput');
displayOutput = ''? 'Loading....' : 
fakeFetch('https://example.com/api/profile/NC002')
.then(res=>{
    displayOutput.textContent = `Welcome!, ${res.data.data.name} from ${res.data.data.institute}`
})
.catch(err=>{
document.textContent= `Status : ${err.status}, message : ${message}`
})