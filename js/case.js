function caseIncreaseAndDecrase(isIncrease) {
    const caseProductadd = document.getElementById('case-field');
    const caseProductaddString = caseProductadd.value;
    const caseProductaddConvert = parseInt(caseProductaddString);


    let newCaseNumber;

    if (isIncrease === true) {
        newCaseNumber = caseProductaddConvert + 1;
    } else {
        newCaseNumber = caseProductaddConvert - 1;

    }
    caseProductadd.value = newCaseNumber;
    return newCaseNumber
}



function caseTotalPrice(casePrice) {
    const caseElement = casePrice * 59;
    const casePreviusPrice = document.getElementById('case-total')
    casePreviusPrice.innerText = caseElement
}



document.getElementById('case-increase').addEventListener('click', function () {
    const caseQuantity = caseIncreaseAndDecrase(true)
    caseTotalPrice(caseQuantity)


    totalPrice()

})

document.getElementById('case-decrease').addEventListener('click', function () {
    const phoneQuantity = caseIncreaseAndDecrase(false)


    if (phoneQuantity >= 0) {
        caseTotalPrice(phoneQuantity)
    }
    totalPrice()
})