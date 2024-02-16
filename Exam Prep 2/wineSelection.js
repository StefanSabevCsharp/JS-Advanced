class WineSelection {

    wines = [];
    bill = 0;

    constructor(space) {
        this.space = space;
    }

    reserveABottle(wineName, wineType, price) {
        if (this.space == this.wines.length) { //to check !!!
            throw new Error("Not enough space in the cellar.");
        }
        const newWine = {
            wineName,
            wineType,
            price: Number(price),
            paid: false
        }
        this.wines.push(newWine);
        return `You reserved a bottle of ${wineName} ${wineType} wine.`
    }
    payWineBottle( wineName, price ) {
        let wine = this._findWine(wineName);
        if(!wine){
            throw new Error(`${wineName} is not in the cellar.`)
        }
        if(wine.paid){
            throw new Error(`${wineName} has already been paid.`)
        }
        wine.paid = true;
        this.bill += wine.price;
        return `You bought a ${wineName} for a ${price}$.`


    }
    openBottle(wineName) {
        let wine = this._findWine(wineName);
        if(!wine){
            throw new Error("The wine, you're looking for, is not found.")
        }
        if(!wine.paid){
            throw new Error(`${wineName} need to be paid before open the bottle.`)
        }

        this.wines.splice(this.wines.indexOf(wine),1);
        return `You drank a bottle of ${wineName}.`
    }
    cellarRevision(wineType){
        if(wineType){
            let wine = this.wines.find(w => w.wineType == wineType);
            if(!wine){
                throw new Error(`There is no ${wineType} in the cellar.`)
            }else{
                let paid = wine.paid ? "Has Paid" : "Not Paid";
                return `${wine.wineName} > ${wine.wineType} - ${paid}.`
            }
        }else{
            let stringToReturn = `You have space for ${ this.space - this.wines.length } bottles more.\nYou paid ${this.bill}$ for the wine.\n`

            for (const wine of this.wines.sort((a,b) => a.wineName.localeCompare(b.wineName))) {
                let paid = wine.paid ? "Has Paid" : "Not Paid";
                stringToReturn += `${wine.wineName} > ${wine.wineType} - ${paid}.\n`
                
            }
            return stringToReturn.trim();

            
        }
    }

    _findWine(wineName){
        return this.wines.find(w => w.wineName == wineName);
    }

}

const selection = new WineSelection(5)
selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144);
selection.payWineBottle('Bodegas Godelia Mencía', 144);
selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
console.log(selection.cellarRevision());

