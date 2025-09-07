"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const space = ' ';
const operations = ['+', '-', '*', '/'];
const openBracket = '(';
const closeBracket = ')';
function calc(expression) {
    let operands = splitWithoutBrackets(expression);
    if (operands.length === 0) {
        console.log('Wrong expression!');
        return;
    }
    let answer = handleOperands(operands);
    if (operands.length === 0) {
        console.log(answer);
    }
    else {
        console.log("Too much parameters!");
    }
    function handleOperands(operandsList) {
        if (operandsList.length === 1) {
            if (operandsList[0].includes('Error')) {
                return operandsList[0];
            }
            else {
                return 'Invalid expression!';
            }
        }
        let operation = operandsList[0];
        operandsList.splice(0, 1);
        let operandOne = "";
        if (operandsList.length === 1) {
            return 'Invalid expression!';
        }
        else if (operations.includes(operandsList[0])) {
            operandOne = handleOperands(operandsList);
            if (typeof (operandOne) === 'string') {
                return operandOne;
            }
        }
        else if (!isNumeric(operandsList[0])) {
            return "Invalid expression!";
        }
        else {
            operandOne = Number(operandsList[0]);
            operandsList.splice(0, 1);
        }
        let operandTwo = "";
        if (operations.includes(operandsList[0])) {
            operandTwo = handleOperands(operandsList);
            if (typeof (operandTwo) === "string") {
                return operandTwo;
            }
        }
        else if (!isNumeric(operandsList[0])) {
            return 'Invalid expression!';
        }
        else {
            operandTwo = Number(operandsList[0]);
            operandsList.splice(0, 1);
        }
        if (operation === '+') {
            return operandOne + operandTwo;
        }
        if (operation === '-') {
            return operandOne - operandTwo;
        }
        if (operation === '*') {
            return operandOne * operandTwo;
        }
        if (operation === '/') {
            return operandOne / operandTwo;
        }
        return "error";
    }
    function splitWithoutBrackets(expression) {
        let listOfExpressions = [];
        let activeBrackets = 0;
        let bracketExpression = '';
        for (let i = 0; i < expression.length; i++) {
            if (activeBrackets === 0) {
                if (expression[i] !== space) {
                    if (operations.includes(expression[i]) && i !== expression.length - 1 && (expression[i + 1] === space
                        || expression[i + 1] === openBracket)) {
                        listOfExpressions = [
                            ...listOfExpressions,
                            expression[i]
                        ];
                    }
                    else if (expression[i] === openBracket) {
                        activeBrackets += 1;
                        bracketExpression += expression[i];
                    }
                    else if (expression[i] == closeBracket) {
                        return ['Error: wrong placed brackets!'];
                    }
                    else {
                        const num = expression.substring(i, returnMinIndex(i));
                        if (isNumeric(num)) {
                            listOfExpressions = [
                                ...listOfExpressions,
                                num
                            ];
                            i += num.length;
                        }
                        else {
                            return [`Error: wrong number - ${num}`];
                        }
                    }
                }
            }
            else {
                bracketExpression += expression[i];
                if (expression[i] === openBracket) {
                    activeBrackets += 1;
                }
                if (expression[i] === closeBracket) {
                    activeBrackets -= 1;
                }
                if (activeBrackets === 0) {
                    listOfExpressions = [
                        ...listOfExpressions,
                        bracketExpression
                    ];
                    bracketExpression = '';
                }
            }
        }
        if (activeBrackets !== 0) {
            return ['Not enough brackets!'];
        }
        return listOfExpressions;
        function returnMinIndex(startIndex) {
            let minIndex = expression.length;
            if (expression.indexOf(')', startIndex) !== -1 && expression.indexOf(')', startIndex) < minIndex) {
                minIndex = expression.indexOf(')', startIndex);
            }
            if (expression.indexOf(' ', startIndex) !== -1 && expression.indexOf(' ', startIndex) < minIndex) {
                minIndex = expression.indexOf(' ', startIndex);
            }
            return minIndex;
        }
    }
    function isNumeric(thisExpression) {
        return !isNaN(Number(thisExpression));
    }
}
calc('/ - 40 8 + - 5 * 1 4 / 9 3 ');
//# sourceMappingURL=calculator.js.map