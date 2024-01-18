function printNames(names) {
    let sortedNames = names.sort((a, b) => a.localeCompare(b));
    let counter = 1;
    for (let name of sortedNames) {
        console.log(`${counter}.${name}`);
        counter++;
    }
    
}

printNames(["John", "Bob", "Christina", "Ema"]);