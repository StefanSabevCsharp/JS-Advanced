function rotateArray(array,rotations){
    for(let i = 0; i < rotations; i++){
        let last = array.pop();
        array.unshift(last);
    }
    return array.join(' ');
}

console.log(rotateArray(['1', '2', '3', '4'], 2)); // '3 4 1 2'