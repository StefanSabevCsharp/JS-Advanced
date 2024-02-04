function solve(data){

    let result = {};

    for (const iterator of data) {
        let [command, name, key, value] = iterator.split(" ");
        result[command](name, key, value);
            
    }

    return {
        create: (name, _, parent) => {
            result[name] = {};
            if(parent){
                result[name] = Object.create(result[parent]);
            }
        },
        set: (name, key, value) => {
            result[name][key] = value;
        },
        print: (name) => {
            let output = [];
            for (const key in result[name]) {
                output.push(`${key}:${result[name][key]}`);
            }
            console.log(output.join(", "));
        }
    }

    

    

}

solve(['create c1','create c2 inherit c1','set c1 color red','set c2 model new','print c1','print c2'])
