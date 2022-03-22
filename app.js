
const detailsButton = document.getElementById('detail-submit-btn');
detailsButton.addEventListener('click', function () {
    const buyerDetails = document.getElementById('buyer-details-input');
    console.log('buyerDetails -- ', buyerDetails);
    document.getElementById('buyer-info').innerText = buyerDetails.value;
    //clean input buyerDetails
    buyerDetails.value = '';
})