
const fakeFetch =(url)=>{
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            if(url==='https://example.com/api/itemlist'){
                resolve({
                    status : 200,
                    message : 'Success',
                    data : [
                        {itemName : 'Bread',price : 30,quantity : 10},
                        {itemName : 'Water Bottle',price : 50,quantity : 50},
                        {itemName : 'Dairy Milk',price : 20,quantity : 30}
                    ]
                });
            }else {
                reject({
                    status : 404,
                    message : 'Items List not found.'
                });
            }
        },2000);
    })
}
const items = document.querySelector('#items');

fakeFetch('https://example.com/api/itemlist')
.then(res=>{
   const data = res.data;
  const para = document.createElement('div');
  let itemsText = '';
  data.forEach(({itemName,price,quantity})=>{
      
      itemsText += `<p> ${itemName} ------ INR ${price} ----- ${quantity}</p>`
  })
  para.innerHTML = itemsText;
items.appendChild(para);
})
.catch(err=>{
    if(err.status ===404){
        items.textContent = 'The Data you are looking for , does not exist'
    }
})