/**
 * @param {string} selector1
 * @param {string} selector2
 * @param {string} resultSelector
 * @return {object}
 */

function calculator() {
    let firstNumber;
    let secondNumber;
    let result;
    
    function init(selector1, selector2, resultSelector) {
        firstNumber = document.querySelector(selector1);
        secondNumber = document.querySelector(selector2);
        result = document.querySelector(resultSelector);
    }

    function add() {
        result.value = Number(firstNumber.value) + Number(secondNumber.value);
    }

    function subtract() {
        result.value = Number(firstNumber.value) - Number(secondNumber.value);
    }

    return {
        init,
        add,
        subtract
    }
}