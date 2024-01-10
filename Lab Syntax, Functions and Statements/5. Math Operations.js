function calculate(a, b, operator) {
    let result = 0;
    switch (operator) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break
        case '*':
            result = a * b;
            break
        case '/':
            result = a / b;
            break
        case '%':
            result = a % b;
            break
        case '**':
            result = a ** b;
            break
    }
    console.log(result);
}

calculate(5, 6, '+');