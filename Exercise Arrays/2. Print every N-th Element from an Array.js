function printArray(arr, delimiter) {
    let result = []
    for (let i = 0; i < arr.length; i += delimiter) {
        result.push(arr[i]);
    }
   return result;
}

printArray(['5', '20', '31', '4', '20'], 2);