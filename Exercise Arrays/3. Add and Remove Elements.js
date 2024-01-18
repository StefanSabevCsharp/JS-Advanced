function createArrayFromCommands(commands) {
    let arr = [];
    let counter = 1;
    for (let i = 0; i < commands.length; i++) {
        if (commands[i] === 'add') {
            arr.push(counter);
        } else if (commands[i] === 'remove') {
            arr.pop();
        }
        counter++;
    }
    
}

function createArrayFromCommandsV2(commands){
    let arr = [];
    let counter = 1;
    commands.forEach(command => {
        if (command === 'add') {
            arr.push(counter);
        } else if (command === 'remove') {
            arr.pop();
        }
        counter++;
    });

    if (arr.length > 0) {
        console.log(arr.join('\n'));
    } else {
        console.log('Empty');
    }
}

createArrayFromCommands(['add', 
'add', 
'add', 
'add']
);