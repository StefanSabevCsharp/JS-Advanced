function printRectangleOfStars(n = 5) {
    for (let i = 0; i < n; i++) {
        console.log('* '.repeat(n));
    }
}

printRectangleOfStars(1);
printRectangleOfStars(2);
printRectangleOfStars(8);
printRectangleOfStars();