//Add an event listener to the submit button
document.getElementById('submit').addEventListener('click', submitOrder);


function submitOrder() {
    //Grab the order id from the text field
    let orderId = document.getElementById('orderId').value;

    //Only invoke the API if the order id field wasn't empty
    if (orderId) {
        let url = `https://www.cis.gvsu.edu/~kurmasz/Orders/${orderId}`;
        fetch(url)
            .then((response) => {
                return response.json()
            })
            .then((responsejson) => {
                printData(responsejson, orderId)
            })
            .catch((error) => {
                console.log(error);
            });
    }
}

function printData(data, orderId) {
    // document.getElementById('orderTitle').innerText = 'Order ' + orderId + ' Information';
    // document.getElementById('itemHeaders').innerHTML = '<span>Item&nbsp&nbsp&nbsp&nbsp&nbsp</span>Quantity&nbsp&nbsp&nbsp&nbsp&nbsp<span></span><span>Price&nbsp&nbsp&nbsp&nbsp&nbsp</span>'

    let newElementList = [];
    
     for (let item of data) {
         let newItemDiv = document.createElement('DIV');
         newItemDiv.innerHTML = `<div class='itemHolder'><div class='itemStyle'>Item:                  ${item.item}</div><div class='itemStyle2'>Quantity:           ${item.quantity}</div><div class='itemStyle3'>Price:                 ${item.price}</div></div>`;
         document.getElementById('itemList').appendChild(newItemDiv)
     }
}