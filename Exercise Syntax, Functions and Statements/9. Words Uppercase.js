function solve(text){
    console.log(text.split(/\W+/).filter(w => w !== '').map(w => w.toUpperCase()).join(', '));
}

solve('Hi, how are you?');