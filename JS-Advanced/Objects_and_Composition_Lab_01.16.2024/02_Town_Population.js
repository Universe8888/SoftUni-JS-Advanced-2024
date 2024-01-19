function townPopulation(input) {
    let towns = {};

    for (let line of input) {
        let [name, population] = line.split(' <-> ');
        population = Number(population);

        if (towns[name] != undefined) {
            population += towns[name];
        }

        towns[name] = population;
    }

    let result = '';

    for (let town in towns) {
        result += `${town} : ${towns[town]}\n`;
    }

    return result;
}

console.log(townPopulation(['Sofia <-> 1200000', 'Montana <-> 20000', 'New York <-> 10000000', 'Washington <-> 2345000', 'Las Vegas <-> 1000000']));
console.log('-----------------');
console.log(townPopulation(['Istanbul <-> 100000', 'Honk Kong <-> 2100004', 'Jerusalem <-> 2352344', 'Mexico City <-> 23401925', 'Istanbul <-> 1000']));

//100/100 Judge