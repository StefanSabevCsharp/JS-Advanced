function solve(instructions){
    let array = [];

    for (const instruction of instructions) {
        if(typeof instruction === 'number'){
            array.push(instruction);
        }else{
            if(array.length < 2){
                console.log('Error: not enough operands!');
                return;
            }
            let num2 = array.pop();
            let num1 = array.pop();
            let result = calculate(num1,num2,instruction);
            array.push(result);
        }

    }
    if(array.length > 1){
        console.log('Error: too many operands!');
    }
    else{
        console.log(array[0]);
    }
    function calculate(num1,num2,operator){
        let result = 0;
        switch(operator){
            case '+': result = num1 + num2; break;
            case '-': result = num1 - num2; break;
            case '*': result = num1 * num2; break;
            case '/': result = num1 / num2; break;
        }
        return result;
    }
    

}

solve([5, 3, 4, '*', '-'])