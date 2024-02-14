class OnlineShop {

    constructor(warehouseSpace){

        this.warehouseSpace = warehouseSpace;
        this.products = [];
        this.sales = [];

    }

   loadingStore(product,quantity,spaceRequired){
        if(this.warehouseSpace < spaceRequired){
            throw new Error("Not enough space in the warehouse.")
        }else{
            let newProduct = {
                product,
                quantity
            }
            this.products.push(newProduct);
            this.warehouseSpace -= spaceRequired;
            return `The ${product} has been successfully delivered in the warehouse.`;
        }

    }
    quantityCheck(product,minimalQuantity){
        let searchedProduct = this.products.find(p => p.product == product);
        if(!searchedProduct){
            throw new Error(`There is no ${product} in the warehouse.`);
        }
        if(minimalQuantity <= 0) {
            throw new Error("The quantity cannot be zero or negative.")
        }
        if(minimalQuantity <= searchedProduct.quantity){
            return `You have enough from product ${product}.`
        }else{
            let diff = minimalQuantity - searchedProduct.quantity;
            searchedProduct.quantity += diff;
            return `You added ${diff} more from the ${product} products.`
        }

    }
    sellProduct(product) {
        let searchedProduct = this.products.find(p => p.product == product);
        if(!searchedProduct){
            throw new Error(`There is no ${product} in the warehouse.`)
        }
        searchedProduct.quantity -= 1;
        this.sales.push({
            product,
            quantity: 1
        })
        return `The ${product} has been successfully sold.`

    }
    revision(){
        let stringToReturn = 
        `You sold ${this.sales.length} products today! \nProducts in the warehouse: \n`;

        if(this.sales.length == 0){
            throw new Error("There are no sales today!")
        }
        for (const obj of this.products) {
           let [product,quantity] = Object.values(obj);
           stringToReturn += `${product}-${quantity} more left \n`
            
        }
        return stringToReturn.trim();

    }
}

const myOnlineShop = new OnlineShop(500)
console.log(myOnlineShop.loadingStore('headphones', 10, 200));
console.log(myOnlineShop.loadingStore('laptop', 5, 200));

console.log(myOnlineShop.quantityCheck('headphones', 10));
console.log(myOnlineShop.quantityCheck('laptop', 10));

console.log(myOnlineShop.sellProduct('headphones'));
console.log(myOnlineShop.sellProduct('laptop'));
console.log(myOnlineShop.revision());
