
const detailsButton = document.getElementById('detail-submit-btn');
detailsButton.addEventListener('click', function () {
    const buyerDetails = document.getElementById('buyer-details-input');
    document.getElementById('buyer-info').innerText = buyerDetails.value;
    //clean input buyerDetails
    buyerDetails.value = '';
})
const addProductBtn = document.getElementById('add-details-btn');
addProductBtn.addEventListener('click', function () {
    const infoTable = document.getElementById('info-table');

    const itemName = document.getElementById('item-name-input');
    const itemPrice = document.getElementById('item-price-input');
    const itemQuantity = document.getElementById('item-quantity-input');


    // totol price;
    const totalPrice = parseInt(itemPrice.value) * parseInt(itemQuantity.value);
    console.log('totalPrice -- ', totalPrice)
    const tr = document.createElement('tr');
    const th = document.createElement('th');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');

    td3.classList.add('item-total')

    th.innerText = itemName.value;
    td1.innerText = itemPrice.value;
    td2.innerText = itemQuantity.value;
    td3.innerText = totalPrice;

    tr.appendChild(th);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    infoTable.appendChild(tr);

    totalCalculation();


    //clear product details inputs
    itemName.value = '';
    itemPrice.value = '';
    itemQuantity.value = '';
})

function totalCalculation() {
    const subTotal = calcSubTotal();

    const subTotalToDisplay = document.getElementById('sub-total');
    subTotalToDisplay.innerText = subTotal;

    //tax
    const tax = subTotal * .2;
    document.getElementById('tax').innerText = tax;
}
function calcSubTotal() {
    let subTotal = 0;
    const cost = document.getElementsByClassName('item-total');
    for (let i = 0; i < cost.length; i++) {
        const element = cost[i];
        const price = parseInt(element.innerText);
        subTotal = subTotal + price;
    }
    console.log('subTotal -- ', subTotal)
    return subTotal;

}