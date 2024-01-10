function printCircleArea(r) {
    
    let isNumber = typeof(r) === 'number';

    if(isNumber){
        let area = Math.PI * r * r;
        console.log(area.toFixed(2));
    }else{
        console.log(`We can not calculate the circle area, because we receive a ${typeof(r)}.`);
    }
}
