function fibo(){

    let a = 0;
    let b = 1;
     return function(){
        let c = a + b;
        a = b;
        b = c;
        return a;
     }
}
let fib = fibo();
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());

console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
