/**
 * You are assigned to create a simple HTML page that shows information about buses.
 * You will receive a JSON object that contains an array of buses. Each bus has a name and a time (number) when it will arrive at the bus stop.
 * The information has to be shown in the following format:
 *    "Bus {bus name} arrives in {time} minutes"
 * The name and the time of the bus should be shown in an unordered list.
 * The stop name is a heading 3 element.
 * The buses should be shown when the "Show Bus" button is clicked.
 * The stop name and the buses should be cleared when the "Clear" button is clicked.
 */

function getInfo() {
    const stopId = document.getElementById('stopId').value;
    const stopName = document.getElementById('stopName');
    const buses = document.getElementById('buses');
    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            stopName.textContent = data.name;
            buses.innerHTML = '';
            Object.entries(data.buses).forEach(([bus, time]) => {
                const li = document.createElement('li');
                li.textContent = `Bus ${bus} arrives in ${time} minutes`;
                buses.appendChild(li);
            });
        })
        .catch(() => {
            stopName.textContent = 'Error';
            buses.innerHTML = '';
        });
}

//100/100