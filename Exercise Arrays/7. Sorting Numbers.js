function sortNumbers(arr) {
    arr.sort((a, b) => a - b);
    let result = [];
    let index = 0;

    while (arr.length > 0) {
       
        if(index % 2 == 0){
            result.push(arr.shift());
        }else{
            result.push(arr.pop());
        }
        index++;
      
    }
    return result;
}

console.log(sortNumbers([1, 3, 8, 4, 10, 12, 3, 2, 24]));