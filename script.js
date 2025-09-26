const inputOne = document.getElementById('input1')
const inputTwo = document.querySelector('#input2')
const btn = document.getElementById('btn')
const output = document.getElementById('output')

btn.addEventListener('click', (e) => {
    e.preventDefault()
    const numberOrNaN1 = Number(inputOne.value)
    const numberOrNaN2 = Number(inputTwo.value)
let result = ''
    if(isNaN(numberOrNaN1) && isNaN(numberOrNaN2)) {
        result = 'Введите числа!'
    }
    if(isNaN(numberOrNaN1) && !isNaN(numberOrNaN2)) {
        result = 'Введите число в первое поле!'
    }
    if(!isNaN(numberOrNaN1) && isNaN(numberOrNaN2)) {
        result = 'Введите число во второе поле!'
    }
    if(!isNaN(numberOrNaN1) && !isNaN(numberOrNaN2)) {
        result = `Результат = ${numberOrNaN1 + numberOrNaN2}`
    }
    output.innerText = result
})