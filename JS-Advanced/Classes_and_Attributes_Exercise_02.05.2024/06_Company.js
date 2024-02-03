/**
 * 6. Company
 * Create a class Company that generates instances by the given description. The class should have the following properties:
 * •	departments - an array of objects
 * The company has the following properties:
 * •	addEmployee(name, salary, position, department) - adds a new employee into the given department
 * o	If the department is not present, it should be created
 * o	The function should return "New employee is hired. Name: {name}. Position: {position}"
 * •	bestDepartment() - returns the department with the highest average salary
 * o	The department should have at least one employee
 * o	The average salary is calculated by the formula: totalSalary / employeesCount
 * o	The best department is the one with the highest average salary
 * o	If two departments have the same average salary, the department with the shortest name should be returned
 * o	The output should be in the following format:
 * "Best Department is: {departmentName}
 * Average salary: {averageSalary}
 * {employee1} {salary} {position}
 * {employee2} {salary} {position}
 * {employee3} {salary} {position}
 * …"
 * @param {Array} input
 * @return {Array}
 */
class Company {
    constructor() {
        this.departments = [];
    }

    addEmployee(name, salary, position, department) {
        if (!name || !salary || !position || !department || salary < 0) {
            throw new Error('Invalid input!');
        }

        let currentDepartment = this.departments.find(d => d.name === department);
        if (!currentDepartment) {
            currentDepartment = { name: department, employees: [] };
            this.departments.push(currentDepartment);
        }

        currentDepartment.employees.push({ name, salary, position });
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        this.departments.forEach(department => {
            department.averageSalary = department.employees.reduce((acc, e) => acc + e.salary, 0) / department.employees.length;
        });

        const bestDepartment = this.departments.sort((a, b) => b.averageSalary - a.averageSalary)[0];
        let result = `Best Department is: ${bestDepartment.name}\nAverage salary: ${bestDepartment.averageSalary.toFixed(2)}\n`;

        bestDepartment.employees.sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name)).forEach(e => {
            result += `${e.name} ${e.salary} ${e.position}\n`;
        });

        return result.trim();
    }
}


let c = new Company();

c.addEmployee("Stanimir", 2000, "engineer", "Construction");

c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");

c.addEmployee("Slavi", 500, "dyer", "Construction");

c.addEmployee("Stan", 2000, "architect", "Construction");

c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");

c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");

c.addEmployee("Gosho", 1350, "HR", "Human resources");

console.log(c.bestDepartment());


// output:

// Best Department is: Construction
// Average salary: 1500.00
// Stan 2000 architect
// Stanimir 2000 engineer
// Pesho 1500 electrical engineer
// Slavi 500 dyer