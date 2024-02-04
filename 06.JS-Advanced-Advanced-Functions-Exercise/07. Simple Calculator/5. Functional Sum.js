function solve(n){

    let sum = 0;
    sum += n;
    function add(n){
        sum += n;
        return add;
    }
    add.toString = () => sum;
    return add;

}
console.log(solve(1)(6)(-3).toString());