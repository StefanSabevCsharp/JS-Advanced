function solve(matrix){

    let sum1 = 0;
    let sum2 = 0;

    for (let i = 0; i < matrix.length; i++) {
        sum1 += matrix[i][i];
        sum2 += matrix[i][matrix.length - 1 - i];
    }

    console.log(sum1 + ' ' + sum2);
}

solve([[20, 40],[10, 60]]); // 80 50