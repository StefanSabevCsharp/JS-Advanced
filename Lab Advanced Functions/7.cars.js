function solve(data){

    for (const token of data) {
        let [command,name,key,value] = token.split(" ");
        switch (command) {
            case "create":
                if(key == "inherit"){
                    result.create(name,true,value);
                }else{
                    result.create(name,false);
                }
                break;
            case "set":
                result.set(name,key,value);
                break;
            case "print":
                result.print(name);
                break;
            default:
                break;
        }
        
    }
   

    let result = {};

    return {
        create: (name, inherits, parentName) => result[name] = inherits ? Object.create(result[parentName]) : {},
        set: (name, key, value) => result[name][key] = value,
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
