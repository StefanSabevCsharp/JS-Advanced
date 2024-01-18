function solve(arr) {
    let result = arr.reduce((acc, curr, index, arr) => {
        if (curr >= Math.max(...acc)) {
            acc.push(curr)
        }
        return acc
    }, [])
    return result;
}

solve([1, 3, 8, 4, 10, 12, 3, 2, 24]);