
function validityChecker(x1, y1, x2, y2) {

    function checkValidity(x1, y1, x2, y2) {
        let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        return Number.isInteger(distance) ? 'valid' : 'invalid';
    }

    console.log(`{${x1}, ${y1}} to {0, 0} is ${checkValidity(x1, y1, 0, 0)}`);
    console.log(`{${x2}, ${y2}} to {0, 0} is ${checkValidity(x2, y2, 0, 0)}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${checkValidity(x1, y1, x2, y2)}`);

}

validityChecker(3, 0, 0, 4);
