function printArguments(data){

    let args = Array.from(arguments);
  let result = {};

  for (let i = 0; i < args.length; i++) {
    let type = typeof args[i];
    console.log(`${type}: ${args[i]}`);
    if (!result[type]) {
      result[type] = 0;
    }
    result[type]++;
  }
    
    Object.keys(result).sort((a, b) => result[b] - result[a]).forEach(key => {
        console.log(`${key} = ${result[key]}`);
    });

}

printArguments('cat', 42, function () { console.log('Hello world!'); })