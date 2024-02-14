// class FlightBookingSystem {
//     constructor(agencyName) {
//         this.agencyName = agencyName;
//         this.flights = [];
//         this.bookings = [];
//         this.bookingsCount = 0;
//     }

//     addFlight(flightNumber, destination, departureTime, price) {
//         const flightExists = this.flights.some(flight => flight.flightNumber === flightNumber);
//         if (flightExists) {
//             return `Flight ${flightNumber} to ${destination} is already available.`;
//         } else {
//             this.flights.push({ flightNumber, destination, departureTime, price });
//             return `Flight ${flightNumber} to ${destination} has been added to the system.`;
//         }
//     }

//     bookFlight(passengerName, flightNumber) {
//         const flight = this.flights.find(flight => flight.flightNumber === flightNumber);
//         if (!flight) {
//             return `Flight ${flightNumber} is not available for booking.`;
//         } else {
//             this.bookings.push({ passengerName, flightNumber });
//             this.bookingsCount++;
//             return `Booking for passenger ${passengerName} on flight ${flightNumber} is confirmed.`;
//         }
//     }

//     cancelBooking(passengerName, flightNumber) {
//         const bookingIndex = this.bookings.findIndex(booking => booking.passengerName === passengerName && booking.flightNumber === flightNumber);
//         if (bookingIndex === -1) {
//             throw new Error(`Booking for passenger ${passengerName} on flight ${flightNumber} not found.`);
//         } else {
//             this.bookings.splice(bookingIndex, 1);
//             this.bookingsCount--;
//             return `Booking for passenger ${passengerName} on flight ${flightNumber} is cancelled.`;
//         }
//     }

//     showBookings(criteria) {
//         if (this.bookingsCount === 0) {
//             throw new Error(`No bookings have been made yet.`);
//         }

//         let filteredBookings;
//         switch (criteria) {
//             case "all":
//                 filteredBookings = this.bookings;
//                 break;
//             case "cheap":
//                 filteredBookings = this.bookings.filter(booking => this.flights.find(flight => flight.flightNumber === booking.flightNumber && flight.price <= 100));
//                 break;
//             case "expensive":
//                 filteredBookings = this.bookings.filter(booking => this.flights.find(flight => flight.flightNumber === booking.flightNumber && flight.price > 100));
//                 break;
//             default:
//                 throw new Error(`Invalid criteria.`);
//         }

//         if (filteredBookings.length === 0) {
//             return criteria === "cheap" ? "No cheap bookings found." : "No expensive bookings found.";
//         }

//         const message = filteredBookings.map(booking => `${booking.passengerName} booked for flight ${booking.flightNumber}.`);
//         return [`${criteria.charAt(0).toUpperCase() + criteria.slice(1)} bookings(${filteredBookings.length}):`, ...message].join("\n");
//     }
// }



// const system = new FlightBookingSystem("TravelWorld");
//   console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
//   console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
//   console.log(system.addFlight("CC303", "Chicago", "11:45 AM", 120));
//   console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));


// //Flight AA101 to Los Angeles has been added to the system.
// Flight BB202 to New York has been added to the system.
// Flight CC303 to Chicago has been added to the system.
// Flight AA101 to Los Angeles is already available.


const system = new FlightBookingSystem("TravelWorld");
  console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
  console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
  console.log(system.bookFlight("Alice", "AA101"));
  console.log(system.bookFlight("Bob", "BB202"));
  console.log(system.bookFlight("Charlie", "CC303"));


//   Flight AA101 to Los Angeles has been added to the system.
//   Flight BB202 to New York has been added to the system.
//   Booking for passenger Alice on flight AA101 is confirmed.
//   Booking for passenger Bob on flight BB202 is confirmed.
//   Flight CC303 is not available for booking.


//81/100

// second solution

class FlightBookingSystem {
    constructor(agencyName) {
        this.agencyName = agencyName;
        this.flights = [];
        this.bookings = [];
        this.bookingsCount = 0;
    }

    addFlight(flightNumber, destination, departureTime, price) {
        const flightExists = this.flights.some(flight => flight.flightNumber === flightNumber);
        if (flightExists) {
            return `Flight ${flightNumber} to ${destination} is already available.`;
        } else {
            this.flights.push({ flightNumber, destination, departureTime, price });
            return `Flight ${flightNumber} to ${destination} has been added to the system.`;
        }
    }

    bookFlight(passengerName, flightNumber) {
        const flight = this.flights.find(flight => flight.flightNumber === flightNumber);
        if (!flight) {
            return `Flight ${flightNumber} is not available for booking.`;
        } else {
            this.bookings.push({ passengerName, flightNumber });
            this.bookingsCount++;
            return `Booking for passenger ${passengerName} on flight ${flightNumber} is confirmed.`;
        }
    }

    cancelBooking(passengerName, flightNumber) {
        const bookingIndex = this.bookings.findIndex(booking => booking.passengerName === passengerName && booking.flightNumber === flightNumber);
        if (bookingIndex === -1) {
            throw new Error(`Booking for passenger ${passengerName} on flight ${flightNumber} not found.`);
        } else {
            this.bookings.splice(bookingIndex, 1);
            this.bookingsCount--;
            return `Booking for passenger ${passengerName} on flight ${flightNumber} is cancelled.`;
        }
    }

    showBookings(criteria) {
        if (this.bookingsCount === 0) {
            throw new Error(`No bookings have been made yet.`);
        }

        let filteredBookings;
        switch (criteria) {
            case "all":
                filteredBookings = this.bookings;
                break;
            case "cheap":
                filteredBookings = this.bookings.filter(booking => this.flights.find(flight => flight.flightNumber === booking.flightNumber && flight.price <= 100));
                break;
            case "expensive":
                filteredBookings = this.bookings.filter(booking => this.flights.find(flight => flight.flightNumber === booking.flightNumber && flight.price > 100));
                break;
            default:
                throw new Error(`Invalid criteria.`);
        }

        if (filteredBookings.length === 0) {
            return criteria === "cheap" ? "No cheap bookings found." : "No expensive bookings found.";
        }

        const message = filteredBookings.map(booking => `${booking.passengerName} booked for flight ${booking.flightNumber}.`);
        return [`${criteria.charAt(0).toUpperCase() + criteria.slice(1)} bookings(${filteredBookings.length}):`, ...message].join("\n");
    }
}

//81/100