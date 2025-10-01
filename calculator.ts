const space = ' '
const operations: string[] = ['+', '-', '*', '/']
const openBracket = '('
const closeBracket = ')'

function calc(expression: string): void {
    const operands: string[] = splitWithoutBrackets(expression)

    if (operands.length === 0) {
        console.log('Wrong expression!')
        return
    }

    const answer = handleOperands(operands)

    if (operands.length === 0 || typeof(answer) === 'string') {
        console.log(answer)
    } else {
        console.log("Too much parameters!")
    }
    

    function handleOperands(operandsList: string[]): number | string {
        if (operandsList.length === 1) {
            if (operandsList[0]!.includes('Error')) {
                return operandsList[0]!
            } else {
                return 'Invalid expression!'
            }
        }
        const operation: string = operandsList[0]!

        operandsList.splice(0, 1)

        let operandOne: number | string = ""
        if (operandsList.length === 1) {
            return 'Invalid expression!'
        } else if (operations.includes(operandsList[0]!)) {
            operandOne = handleOperands(operandsList)

            if (typeof(operandOne) === 'string') {
                return operandOne
            }
        } else if (operandsList[0]!.substring(0, 1) === '(') {
            const thisExpression: string = operandsList[0]!.substring(1, operandsList[0]!.length - 1)

            const newOperands: string[] = splitWithoutBrackets(thisExpression)
            operandOne = handleOperands(newOperands)

            if (typeof(operandOne) === 'string') {
                return operandOne
            }

            operandsList.splice(0, 1)
        } else if (!isNumeric(operandsList[0]!)) {
            return "Invalid expression!"
        } else {
            operandOne = Number(operandsList[0]!)
            operandsList.splice(0, 1)
        }

        let operandTwo: number | string = ""
        if (operations.includes(operandsList[0]!)) {
            operandTwo = handleOperands(operandsList)

            if (typeof(operandTwo) === "string") {
                return operandTwo
            }
        } else if (operandsList[0]!.substring(0, 1) === "(") {
            const thisExpression = operandsList[0]!.substring(1, operandsList[0]!.length - 1)

            const newOperands: string[] = splitWithoutBrackets(thisExpression)
            operandTwo = handleOperands(newOperands)

            if (typeof(operandTwo) === 'string') {
                return operandTwo
            }

            operandsList.splice(0, 1)
        } else if (!isNumeric(operandsList[0]!)) {
            return 'Invalid expression!'
        } else {
            operandTwo = Number(operandsList[0]!)
            operandsList.splice(0, 1)
        }
        
        if (operation === '+') {
            return operandOne + operandTwo
        }
        if (operation === '-') {
            return operandOne - operandTwo
        }
        if (operation === '*') {
            return operandOne * operandTwo
        }
        if (operation === '/') {
            return operandOne / operandTwo
        }

        return "error"
    }

    function splitWithoutBrackets(expression: string): string[] {
        let listOfExpressions: string[] = []
        let activeBrackets = 0
        let bracketExpression = ''

        for (let i = 0; i < expression.length; i++) {
            if (activeBrackets === 0) {
                if (expression[i]! !== space) {
                    if (operations.includes(expression[i]!) && i !== expression.length - 1 && (expression[i + 1]! === space
                        || expression[i + 1]! === openBracket)) {
                        listOfExpressions = [
                            ...listOfExpressions,
                            expression[i]!
                        ]
                    } else if (expression[i]! === openBracket) {
                        activeBrackets += 1
                        bracketExpression += expression[i]
                    } else if (expression[i]! == closeBracket) {
                        return ['Error: wrong placed brackets!']
                    } else {
                        const num: string = expression.substring(i, returnMinIndex(i))

                        if (isNumeric(num)) {
                            listOfExpressions = [
                                ...listOfExpressions,
                                num
                            ]

                            i += num.length
                        } else {
                            return [`Error: wrong number - ${num}`]
                        }
                    }
                }
            } else {
                bracketExpression += expression[i]!

                if (expression[i]! === openBracket) {
                    activeBrackets += 1
                }
                if (expression[i]! === closeBracket) {
                    activeBrackets -= 1
                }
                if (activeBrackets === 0) {
                    listOfExpressions = [
                        ...listOfExpressions,
                        bracketExpression
                    ]

                    bracketExpression = ''
                }
            }
        }

        if (activeBrackets !== 0) {
            return ['Not enough brackets!']
        }

        return listOfExpressions


        function returnMinIndex(startIndex: number): number {
            let minIndex = expression.length

            if (expression.indexOf(')', startIndex) !== -1 && expression.indexOf(')', startIndex) < minIndex) {
                minIndex = expression.indexOf(')', startIndex)
            }

            if (expression.indexOf(' ', startIndex) !== -1 && expression.indexOf(' ', startIndex) < minIndex) {
                minIndex = expression.indexOf(' ', startIndex)
            }

            return minIndex
        }
    }


    function isNumeric(thisExpression: string): boolean {
        return !isNaN(Number(thisExpression))
    }
}

calc('+ 3 4')
calc("* (- 5 6) 7")
calc('+ 1.5 4.5')
calc('- * / 15 - 7 + 1 1 (* (- 8 7) (/ (* 3 5) 5)) + 2 + (* -1 -1) 1')