function sum(firstNumber, lastNumber) {
        return firstNumber + lastNumber;
    };

function subtract(firstNumber, lastNumber) {
        return firstNumber - lastNumber;
    };

function miltipli(firstNumber, lastNumber) {
        return firstNumber * lastNumber;
    };

function divide(firstNumber, lastNumber) {
        return firstNumber /  lastNumber;
    };

export function calculate(firstNumber, lastNumber, operation) {
    let result = null
    switch (operation) {
        case '+':
            result = sum(firstNumber, lastNumber);
            break;
        case '-':
            result = subtract(firstNumber, lastNumber);
            break;
        case '*':
            result = miltipli(firstNumber, lastNumber);
            break;
        case '/':
            result = divide(firstNumber, lastNumber);
            break;
        default:
            break;
    }
    return result
}



