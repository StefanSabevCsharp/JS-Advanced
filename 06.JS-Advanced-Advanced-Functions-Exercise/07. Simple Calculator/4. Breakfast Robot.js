function solution(){
    let recipes = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        }
    };

    let stock = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    return function (input) {
        let [command, item, quantity] = input.split(' ');
        quantity = Number(quantity);

        if (command === 'restock') {
            stock[item] += quantity;
            return 'Success';
        } else if (command === 'prepare') {
            let needed = Object.entries(recipes[item]);
            for (let [item, qty] of needed) {
                if (stock[item] < qty * quantity) {
                    return `Error: not enough ${item} in stock`;
                }
            }

            needed.forEach(([item, qty]) => {
                stock[item] -= qty * quantity;
            });

            return 'Success';
        } else if (command === 'report') {
            return `protein=${stock.protein} carbohydrate=${stock.carbohydrate} fat=${stock.fat} flavour=${stock.flavour}`;
        }
    };

}

let manager = robot();
console.log(manager('restock carbohydrate 10'));
console.log(manager('restock flavour 10'));
console.log(manager('prepare apple 1'));
console.log(manager('restock fat 10'));
console.log(manager('prepare burger 1'));
console.log(manager('report'));
