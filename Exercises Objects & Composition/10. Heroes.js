function solve() {

    const canCast = function(obj) {
        return {
            cast: (spell) => {
                console.log(`${obj.name} cast ${spell}`);
                obj.mana--;
            }
        }
    };
   


    const canFight = function(obj) {
        return{
            fight: () => {
                console.log(`${obj.name} slashes at the foe!`);
                obj.stamina--;
            }
        }
    }
    const fighter = (name) => {
        let obj = {
            name,
            health: 100,
            stamina: 100
        }
        return Object.assign(obj,canFight(obj));
    }

    const mage = (name) => {
        let newMage = {
            name,
            health:100,
            mana:100
        }
        return Object.assign(newMage,canCast(newMage))
    }

    return {mage, fighter};
}


let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);
