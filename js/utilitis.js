function getElementValueById(elementId) {
    const productPrice = document.getElementById(elementId);
    const productPriceString = productPrice.innerText;
    const productPriceConvert = parseInt(productPriceString);
    return productPriceConvert;
}

function totalPrice() {
    const phoneElement = getElementValueById('phone-total')
    const caseElement = getElementValueById('case-total')
    const totalElement = phoneElement + caseElement;

    subTotal('sub-total', totalElement)

    const taxTotalString = (totalElement * 0.1).toFixed(2);
    const taxTotal = parseFloat(taxTotalString)
    subTotal('tax-total', taxTotal)


    const finalTotal = totalElement + taxTotal;
    subTotal('fianl-total', finalTotal)

}


function subTotal(previusValue, newValue) {
    const previusValueElement = document.getElementById(previusValue)
    previusValueElement.innerText = newValue
}