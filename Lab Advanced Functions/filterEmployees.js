function filterEmployees(dataJson,criteria){

    let objects = JSON.parse(dataJson);
    let [criteriaName,value] = criteria.split("-");
    
    // let result = [];
    // let counter = 0;
    // objects.forEach(ob => {
    //     if(ob[criteriaName] == value){
    //         result.push(ob);
    //     }
    // })
    // result.forEach(o => {
    //     console.log(`${counter++}. ${o.first_name} ${o.last_name} - ${o.email}`);
    // })
    objects.filter(x => x[criteriaName] === value)
    .forEach((obj,index) => {
        console.log(`${index}. ${obj.first_name} ${obj.last_name} - ${obj.email}`);
    })
   
}
let data1 = `[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`;
  filterEmployees(data1,'last_name-Johnson')
 

