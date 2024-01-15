function solve(arr){

    arr = arr.sort((a, b) => a - b);
    let result = arr.slice(arr.length / 2);
    return result;
}

solve([3, 19, 14, 7, 2, 19, 6]); // 19 19 14