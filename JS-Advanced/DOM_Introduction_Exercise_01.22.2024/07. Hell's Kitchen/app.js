function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
       let restaurantsData = JSON.parse(document.querySelector('#inputs textarea').value);
       let bestRestaurant = findBestRestaurant(restaurantsData);
       document.querySelector('#bestRestaurant>p').textContent = formatRestaurantMessage(bestRestaurant);
       document.querySelector('#workers>p').textContent = formatWorkersMessage(bestRestaurant.workers);
   }

   function formatRestaurantMessage(bestRestaurant) {
       return `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.avgSalary.toFixed(2)} Best Salary: ${bestRestaurant.maxSalary.toFixed(2)}`;
   }

   function formatWorkersMessage(workers) {
       return workers.map(worker => `Name: ${worker.name} With Salary: ${worker.salary}`).join(' ');
   }

   function findBestRestaurant(restaurantsData) {
       let restaurants = restaurantsData.reduce((restaurantsMap, entry) => {
           let [name, ...workers] = entry.split(/(?: - )|(?:, )/g);
           workers = workers.map(workerEntry => {
               let [workerName, salary] = workerEntry.split(' ');
               return { name: workerName, salary: +salary };
           });

           if (restaurantsMap[name]) {
               restaurantsMap[name].workers = restaurantsMap[name].workers.concat(workers);
           } else {
               restaurantsMap[name] = { name, workers };
           }

           return restaurantsMap;
       }, {});

       Object.values(restaurants).forEach(restaurant => {
           restaurant.avgSalary = restaurant.workers.reduce((total, worker) => total + worker.salary, 0) / restaurant.workers.length;
           restaurant.maxSalary = Math.max(...restaurant.workers.map(worker => worker.salary));
           restaurant.workers.sort((a, b) => b.salary - a.salary);
       });

       return Object.values(restaurants).sort((a, b) => b.avgSalary - a.avgSalary)[0];
   }
}

// ["PizzaHut - Peter 500, George 300, Mark 800", "TheLake - Bob 1300, Joe 780, Jane 660"]

// Name: TheLake Average Salary: 913.33 Best Salary: 1300.00 Name: Bob With Salary: 1300 Name: Joe With Salary: 780 Name: Jane With Salary: 660

//["Mikes - Steve 1000, Ivan 200, Paul 800","Fleet - Maria 850, Janet 650"]

// Name: Fleet Average Salary: 750.00 Best Salary: 850.00 Name: Maria With Salary: 850 Name: Janet With Salary: 650