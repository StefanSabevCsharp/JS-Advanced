function saveTowns(array){
    let towns = {};
    for (let i = 0; i < array.length; i++) {
        let [name, population] = array[i].split(' <-> ');

        population = Number(population);

       if(!towns.hasOwnProperty(name)){
           towns[name] = 0;
       }
       towns[name] += population;

    }
    for (const key in towns) {
        console.log(`${key} : ${towns[key]}`);
    }


}

saveTowns(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']
)