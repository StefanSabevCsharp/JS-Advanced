function solve(arr){
    let newArr = arr.sort((a, b) => a - b);

    console.log(newArr[0], newArr[1]);
}

solve([30, 15, 50, 5]); // 5 15