function solve(matrix) {
    let array = matrix.flat();
    console.log(Math.max(...array));
}

solve([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
); // 33   