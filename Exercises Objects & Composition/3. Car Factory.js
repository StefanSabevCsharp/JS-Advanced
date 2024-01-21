function createCar(car){
    let newCar = {
        model:car.model,
        engine: null,
        carriage: null,
        wheels: []
        
    }
    if(car.power <= 90){
        let engine = {
            power: 90,
            volume: 1800
        }
        newCar.engine = engine;
    }else if(car.power <= 120){
        let engine = {
            power: 120,
            volume: 2400
        }
        newCar.engine = engine;
    }else if(car.power <= 200){
        let engine = {
            power: 200,
            volume: 3500
        }
        newCar.engine = engine;
    }
    newCar.carriage = {
        type: car.carriage,
        color: car.color
    }
    if(car.wheelsize % 2 === 0){
        car.wheelsize--;
    }
    newCar.wheels = Array(4).fill(car.wheelsize);
    return newCar;

}

console.log(
    createCar({

model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }

));  