function calculateFirstAndLast(arr){
    // return Number(arr[0]) + Number(arr[arr.length - 1]);

    return arr
        .map(Number)
        .filter((x, i) => i === 0 || i === arr.length - 1)
        .reduce((a, b) => a + b);
}

console.log(calculateFirstAndLast(['20', '30', '40'])); // 60
