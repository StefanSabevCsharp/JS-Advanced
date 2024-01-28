function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
     
      let input = document.querySelector('#inputs textarea').value;
      let arr = JSON.parse(input);

      let restaurants = {};
      arr.forEach(line => {
         let [name, workers] = line.split(' - ');
         workers = workers.split(', ');
         if (!restaurants[name]) {
            restaurants[name] = [];
         }
         workers.forEach(worker => {
            let [workerName, salary] = worker.split(' ');
            salary = Number(salary);
            restaurants[name].push({ name: workerName, salary });
         });
      });

      let bestRestaurant = Object.entries(restaurants).sort((a, b) => {
         let aAvgSalary = getAverageSalary(a[1]);
         let bAvgSalary = getAverageSalary(b[1]);
         return bAvgSalary - aAvgSalary;
      })[0];

      let output = document.querySelector('#bestRestaurant p');
      output.textContent = `Name: ${bestRestaurant[0]} Average Salary: ${getAverageSalary(bestRestaurant[1]).toFixed(2)} Best Salary: ${getMaxSalary(bestRestaurant[1]).toFixed(2)}`;

      let workersOutput = document.querySelector('#workers p');
      let workersSorted = bestRestaurant[1].sort((a, b) => b.salary - a.salary);
      workersSorted.forEach(worker => {
         workersOutput.textContent += `Name: ${worker.name} With Salary: ${worker.salary} `;
      });
      
      
   }
}