import { calcul } from "./math.js";

const inputUserInt = document.querySelector('#js-inputUser');
const conclusionInt = document.querySelector('#js-conclusion');
const currenInt = document.querySelector('.js-select');
const calculateBtn = document.querySelector('.js-calculate');

let rub = 0,
    money = null;

inputUserInt.addEventListener('input', () => {
    rub = Number.parseInt(inputUserInt.value, 10);
    money = currenInt.value;
});

calculateBtn.addEventListener('click', () => {
    if (currenInt != money) {
        money = currenInt.value
    }
    conclusionInt.value = calcul(rub, money)
});

