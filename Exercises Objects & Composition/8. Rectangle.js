function rectangle(width,height,color){

    let newcolor = color[0].toUpperCase() + color.substring(1);
    
    debugger;
    let newRectangle = {
        width,
        height,
        color: newcolor,
        calcArea : function(){
            return this.width * this.height
        }
    }
    return newRectangle;
}


let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
