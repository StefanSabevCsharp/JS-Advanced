function townsToJson(input){

    let data = input.slice(1);
    let towns = [];
    let info = data.map(x => x.split('|').filter(x => x !== '').map(x => x.trim()));
   
    for (const row of info) {
        let obj = {
            Town: row[0],
            Latitude: Number(Number(row[1]).toFixed(2)),
            Longitude: Number(Number(row[2]).toFixed(2))
        
        }
        towns.push(JSON.stringify(obj));
    }
    console.log(`[${towns.join(',')}]`);
}

townsToJson(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
)