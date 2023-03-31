import {calculate} from "./math.js";

let output = document.querySelector('#output')

let firstNumber = 0;
let operation = null;
let repeatNum = false;

document.querySelectorAll('.num').forEach(button => {
    button.addEventListener('click', event => {
        let value = event.currentTarget.textContent;
        if (repeatNum) {
            output.value = value;
            repeatNum = false;
        }
        else {
            output.value += value;
        }
    })
})

document.querySelectorAll('.option').forEach(button => {
    button.addEventListener('click', event => {
        firstNumber = Number.parseInt(output.value, 10);
        operation = event.currentTarget.textContent;
        repeatNum = true
    })
})

const result = document.querySelector('.result')

result.addEventListener('click', () => {
    let lastNumber = Number.parseInt(output.value, 10);
    repeatNum = true;

    output.value = calculate(firstNumber, lastNumber, operation)
})
