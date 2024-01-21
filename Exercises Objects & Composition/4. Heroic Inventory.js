function heroicInventory(heroes){
    let allHeroes = [];

    for (let index = 0; index < heroes.length; index++) {
        let [name,level,items] = heroes[index].split(' / ');
        level = Number(level);
        items = items ? items.split(', ') : [];
        let hero = {
            name,
            level,
            items
        }
        allHeroes.push(hero);
        
    }
    console.log(JSON.stringify(allHeroes));
}