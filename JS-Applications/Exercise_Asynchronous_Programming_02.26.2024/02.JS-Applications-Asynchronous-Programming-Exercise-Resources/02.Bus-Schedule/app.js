function solve() {
    const infoSpan = document.querySelector('#info span');
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');
    const baseUrl = 'http://localhost:3030/jsonstore/bus/schedule';

    let stop = {
        next: 'depot'
    };

    function depart() {
        departBtn.disabled = true;

        fetch(`${baseUrl}/${stop.next}`)
            .then(res => res.json())
            .then(data => {
                stop = data; // Update the stop with the new data received.
                infoSpan.textContent = `Next stop ${stop.name}`;
                arriveBtn.disabled = false; // Enable "Arrive" button after successfully fetching the data.
            })
            .catch(err => {
                infoSpan.textContent = 'Error'; // Display error message in case of a failed request.
                departBtn.disabled = true; // Keep "Depart" button disabled.
                arriveBtn.disabled = true; // Disable "Arrive" button as well.
            });
    }

    function arrive() {
        arriveBtn.disabled = true; // Disable "Arrive" button immediately to prevent multiple requests.

        infoSpan.textContent = `Arriving at ${stop.name}`;
        departBtn.disabled = false; // Enable "Depart" button for the next journey.

        // No fetch call here since we are just updating UI based on the last fetched stop information.
    }

    return {
        depart,
        arrive
    };
}

let result = solve();

// 100/100