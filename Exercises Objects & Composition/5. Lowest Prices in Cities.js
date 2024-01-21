function printTowns(data){
    let towns = {};
    for (const line of data) {
        let [town,product,price] = line.split(' | ');
        price = Number(price);
        if (!towns.hasOwnProperty(product)) {
            towns[product] = {};
        }
        towns[product][town] = price;
    }
    for (const key in towns) {
        let sorted = Object.entries(towns[key]).sort((a,b) => a[1] - b[1]);
        console.log(`${key} -> ${sorted[0][1]} (${sorted[0][0]})`);
    }
    

}

printTowns(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
)