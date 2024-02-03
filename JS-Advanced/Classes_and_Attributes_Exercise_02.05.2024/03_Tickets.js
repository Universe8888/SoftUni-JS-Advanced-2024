function manageTickets(ticketDescriptions, sortingCriterion) {
    const tickets = ticketDescriptions.map(desc => {
        const [destination, price, status] = desc.split('|');
        return { destination, price: Number(price), status };
    });

    const sortingFunctions = {
        destination: (a, b) => a.destination.localeCompare(b.destination),
        price: (a, b) => a.price - b.price,
        status: (a, b) => a.status.localeCompare(b.status)
    };

    if (sortingFunctions[sortingCriterion]) {
        tickets.sort(sortingFunctions[sortingCriterion]);
    }

    return tickets;
}

console.log(manageTickets([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
], 'destination'));

console.log(manageTickets([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
], 'status'));