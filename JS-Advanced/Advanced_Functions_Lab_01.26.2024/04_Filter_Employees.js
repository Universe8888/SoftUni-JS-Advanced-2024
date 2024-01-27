/**
 * @param {string} input
 * @param {string} criteria
 * @returns {void}
 */

function filterEmployees(input, criteria) {
    const employees = JSON.parse(input);

    const [criteriaKey, criteriaValue] = criteria.split('-');

    function isCriteriaMatch(employee) {
        if (criteria === 'all') return true;
        return employee[criteriaKey] === criteriaValue;
    }

    const filteredEmployees = employees.filter(isCriteriaMatch);

    filteredEmployees.forEach((employee, index) => {
        console.log(`${index}. ${employee.first_name} ${employee.last_name} - ${employee.email}`);
    });
}

const input = `[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
}, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
},
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
}]`;

filterEmployees(input, 'gender-Female');