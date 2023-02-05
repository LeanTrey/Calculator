let operator = ''
let previousValue = ''
let currentValue = ''

let previousScreenEl = document.querySelector('.pre-num')
let currentScreenEl = document.querySelector('.result')
let buttonAC = document.querySelector('.clear')
let equNum = document.querySelector('.equals')
let deciamlEl = document.querySelector('.decimal')
let numbersEl = document.querySelectorAll('.numbers')
let operatorsEl = document.querySelectorAll('.operators')

numbersEl.forEach((number) => number.addEventListener('click', function(e){
    handleNumber(e.target.textContent)
    currentScreenEl.textContent = currentValue
}))

    operatorsEl.forEach((op) => op.addEventListener('click', function(e){
        handleOperator(e.target.textContent)
        previousScreenEl.textContent = previousValue + ' ' + operator
        currentScreenEl.textContent = currentValue
    }))

    buttonAC.addEventListener('click', function(){
        previousScreenEl.textContent = ''
        currentScreenEl.textContent = ''
        operator = ''
        previousValue = ''
        currentValue = ''
    })

    equNum.addEventListener('click', function(){
        if (currentValue != '' && previousValue != ''){
        calculate()
        previousScreenEl.textContent = ''
        if (previousValue.length <= 5){
            currentScreenEl.textContent = previousValue
        } else {
            currentScreenEl.textContent = previousValue.slice(0,5) +'...'
        }
    }
    })

    deciamlEl.addEventListener('click', function(){
        addDecimal()
    })

function handleNumber(num) {
    if (currentValue.length <= 4){
    currentValue += num
    }
}
function handleOperator(op){
    operator = op
    previousValue = currentValue
    currentValue = ''
}

function calculate() {
    previousValue = Number(previousValue)
    currentValue = Number(currentValue)
    
    if(operator === '+') {
        previousValue += currentValue
    } else if(operator === '-') {
        previousValue -= currentValue
    } else if(operator === '/') {
        previousValue /= currentValue
    } else if(operator === 'x') {
        previousValue *= currentValue
    }
    previousValue = roundNumber(previousValue)
    previousValue = previousValue.toString()
    currentValue = currentValue.toString()
}

function roundNumber(num){
    return Math.round(num * 1000) / 1000
}

function addDecimal(){
    if (!currentValue.includes('.')) {
        currentValue += '.'
    }
}