
function phoneIncreaseAndDecrase(isIncrease,) {
    const phoneProductadd = document.getElementById('phone-input-field');
    const phoneProductaddString = phoneProductadd.value;
    const phoneProductaddConvert = parseInt(phoneProductaddString);


    let newPhoneNumber;

    if (isIncrease === true) {
        newPhoneNumber = phoneProductaddConvert + 1;
    } else {
        newPhoneNumber = phoneProductaddConvert - 1;
    }
    phoneProductadd.value = newPhoneNumber;
    return newPhoneNumber
}

function totalPhonePrice(phone) {
    const phoneTotal = phone * 1219;
    const phonePreviusPrice = document.getElementById('phone-total');
    phonePreviusPrice.innerText = phoneTotal
}



document.getElementById('phone-button-pluse').addEventListener('click', function () {

    const phoneTotal = phoneIncreaseAndDecrase(true)
    totalPhonePrice(phoneTotal)


    totalPrice()

})

document.getElementById('phone-minus-button').addEventListener('click', function () {

    const phoneTotal = phoneIncreaseAndDecrase(false)
    if (phoneTotal >= 0) {
        totalPhonePrice(phoneTotal)

    }

    totalPrice()
})