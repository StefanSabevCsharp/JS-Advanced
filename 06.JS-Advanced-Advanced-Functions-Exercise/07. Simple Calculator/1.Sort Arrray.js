function sortArray(arr,order){
    if(order === 'asc'){
        return arr.sort((a,b) => a - b)
    }
    return arr.sort((a,b) => b - a)
}