function dayOfWeek(day) {

    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let index = days.indexOf(day);

    if (index == -1) {
        console.log('error');
    } else {
        console.log(index + 1);
    }
    
}

dayOfWeek('Monday');
dayOfWeek('Friday');
dayOfWeek('Invalid');