/**
 * @param {Array} input - An array of strings containing town names, latitude, and longitude.
 * @throws {Error} - Invalid input: Must be an array. 
 * @returns {string} - A JSON string containing the town names, latitude, and longitude.
 */

function solve(input){
    if (!Array.isArray(input)) {
        throw new Error('Invalid input: Must be an array');
    }

    let result = [];
    let keys = input.shift().split('|').filter(x => x !== '').map(x => x.trim());
    
    for (let line of input) {
        let [town, latitude, longitude] = line.split('|').filter(x => x !== '').map(x => x.trim());
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);
        result.push({ [keys[0]]: town, [keys[1]]: Number(latitude), [keys[2]]: Number(longitude) });
    }

    return JSON.stringify(result);
}

console.log(solve(['| Town | Latitude | Longitude |',
                   '| Sofia | 42.696552 | 23.32601 |',
                   '| Beijing | 39.913818 | 116.363625 |']));
