function printDaysInMonth(month, year) {
    let daysInMonth = new Date(year, month, 0).getDate();
    console.log(daysInMonth);
}

printDaysInMonth(1, 2012);
printDaysInMonth(2, 2021);