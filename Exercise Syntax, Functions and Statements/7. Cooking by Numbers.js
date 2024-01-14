function solve(num, ...op){
    let number = Number(num);
    
    let obj = {
        chop: (num) => num / 2,
        dice: (num) => Math.sqrt(num),
        spice: (num) => num + 1,
        bake: (num) => num * 3,
        fillet: (num) => num * 0.8
    }

    op.forEach(element => {
        number = obj[element](number);
        console.log(number);
    });
}

solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');