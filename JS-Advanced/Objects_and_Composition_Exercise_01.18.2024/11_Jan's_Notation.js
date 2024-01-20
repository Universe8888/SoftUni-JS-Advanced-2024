/**
 * Evaluates a series of instructions in postfix notation.
 * @param {Array} input - An array containing numbers (operands) and strings (arithmetic operators).
 * @returns {string} - The result of the calculation or an error message.
 */

function jansNotation(input) {
    let stack = [];

    function applyOperation(firstOperand, secondOperand, operator) {
        switch (operator) {
            case '+':
                return firstOperand + secondOperand;
            case '-':
                return firstOperand - secondOperand;
            case '*':
                return firstOperand * secondOperand;
            case '/':
                return firstOperand / secondOperand;
            default:
                throw new Error(`Invalid operator: ${operator}`);
        }
    }

    for (let element of input) {
        if (typeof element === 'number') {
            stack.push(element);
        } else {
            if (stack.length < 2) {
                return 'Error: not enough operands!';
            }
            let secondOperand = stack.pop();
            let firstOperand = stack.pop();
            stack.push(applyOperation(firstOperand, secondOperand, element));
        }
    }

    if (stack.length > 1) {
        return 'Error: too many operands!';
    }

    return stack[0].toString();
}

console.log(jansNotation([3, 4, '+'])); // Expected output: "7"
console.log(jansNotation([5, 3, 4, '*', '-'])); // Expected output: "-7"
console.log(jansNotation([7, 33, 8, '-'])); // Expected output: "Error: too many operands!"
console.log(jansNotation([15, '/'])); // Expected output: "Error: not enough operands!"