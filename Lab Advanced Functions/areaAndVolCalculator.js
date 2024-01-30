function solve(area,vol,data){
    let result = [];

    let objects = JSON.parse(data);
    for (let object of objects) {
       

        let currentObj = {
            area: area.call(object),
            volume: vol.call(object)
        }
        result.push(currentObj);
    }
    return result;
}


let data1 = `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`;
solve(area, vol, data1
    );

    function area(){
        return Math.abs(this.x * this.y);
    }
    function vol(){
        return Math.abs(this.x * this.y * this.z);
    }