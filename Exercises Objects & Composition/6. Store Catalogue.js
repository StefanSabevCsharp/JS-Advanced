function printProducts(data){
    let products = {};
    for (const line of data) {
        let [name,price] = line.split(' : ');
        price = Number(price);
        let letter = name[0];
        if (!products.hasOwnProperty(letter)) {
            products[letter] = {};
        }
        products[letter][name] = price;
    }
    let sorted = Object.entries(products).sort((a,b) => a[0].localeCompare(b[0]));
    
   
    for (const key of sorted) {
        let sortedProducts = Object.entries(key[1]).sort((a,b) => a[0].localeCompare(b[0]));
        console.log(key[0]);
        for (const product of sortedProducts) {
            console.log(`  ${product[0]}: ${product[1]}`);
        }
    }

}

printProducts(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
)