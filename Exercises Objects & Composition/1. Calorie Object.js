function createObj(data){
    let newObj = {}

    for (let index = 0; index < data.length; index+= 2) {
        let [name,calories] = [data[index],Number(data[index + 1])];
        newObj[name] = calories;
        
        
    }

    console.log(newObj);

}
createObj(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])