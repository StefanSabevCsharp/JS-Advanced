function sameNumbers(number) {
    let sum = 0;
    let isSame = true;
    let lastDigit = number % 10;
    while (number !== 0) {
        let digit = number % 10;
        sum += digit;
        if (digit !== lastDigit) {
            isSame = false;
        }
        lastDigit = digit;
        number = Math.floor(number / 10);
    }
    console.log(isSame);
    console.log(sum);
}

sameNumbers(2222222);