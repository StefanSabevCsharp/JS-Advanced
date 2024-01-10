function printNumbers(n, m) {
    let num1 = Number(n);
    let num2 = Number(m);
    let result = 0;
    if (num1 > num2) {
        let temp = num1;
        num1 = num2;
        num2 = temp;
    }

    for (let i = num1; i <= num2; i++) {
        result += i;
    }
    console.log(result);
}

printNumbers('-8', '20');