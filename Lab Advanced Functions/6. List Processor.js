function process(data){

     function solve() {
        let arr = [];

        return {
            add: (value) => arr.push(value),
            remove: (value) => arr = arr.filter(x => x != value),
            print: () => console.log(arr.join(","))
        }

       
    }
    let result = solve();
    
    for (const element of data) {
        let [command,value] = element.split(" ");
        result[command](value);
    }

    // for (const element of data) {
    //     let [command,value] = element.split(" ");
    //     solve[command](value);
    // }
    
}

process(['add hello', 'add again', 'remove hello', 'add again', 'print'])