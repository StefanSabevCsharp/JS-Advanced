function sumArray(array,firstIndex,lastIndex){
    let sum = 0;
    if(!Array.isArray(array)){
        return NaN;
    }
    if(firstIndex < 0){
        firstIndex = 0;
    }
    if(lastIndex > array.length - 1){
        lastIndex = array.length - 1;
    }
    for (let i = firstIndex; i <= lastIndex; i++) {
        sum += Number(array[i]);
    }
    return sum;
}

console.log(sumArray([10, 20, 30, 40, 50, 60], 3, 300)); // 150