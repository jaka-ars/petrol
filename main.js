let liters = document.getElementById('litres')
let ninetyTwo = document.querySelector('.btn-92')
let ninetyFive = document.querySelector('.btn-95')
let ninetyEight = document.querySelector('.btn-98')
let price = document.getElementById('price-value')
let total = document.getElementById('total-price')

ninetyTwo.addEventListener('click', () => {
    let priceValue = 2.01
    ninetyTwo.classList.add('active')
    price.innerText = `${priceValue} $`
    total.innerText =`${(priceValue * liters.value).toFixed(2)}$`
})
ninetyFive.addEventListener('click', () => {
    let priceValue = 3.01
    ninetyFive.classList.add('active')
    price.innerText = `${priceValue} $`
    total.innerText =`${(priceValue * liters.value).toFixed(2)}$`
})
ninetyEight.addEventListener('click', () => {
    let priceValue = 4.01
    ninetyEight.classList.add('active')
    price.innerText = `${priceValue} $`
    total.innerText =`${(priceValue * liters.value).toFixed(2)}$`
})