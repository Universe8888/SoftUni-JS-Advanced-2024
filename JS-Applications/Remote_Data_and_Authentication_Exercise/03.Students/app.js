document.addEventListener('DOMContentLoaded', function() {
    const baseUrl = 'http://localhost:3030/jsonstore/collections/students';
    const tbody = document.querySelector('tbody');
    const form = document.getElementById('form');
    const firstNameInput = document.querySelector('input[name="firstName"]');
    const lastNameInput = document.querySelector('input[name="lastName"]');
    const facultyNumberInput = document.querySelector('input[name="facultyNumber"]');
    const gradeInput = document.querySelector('input[name="grade"]');

    form.addEventListener('submit', createStudent);
    loadStudents();

    async function loadStudents() {
        try {
            const response = await fetch(baseUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            tbody.innerHTML = '';  // Clear existing rows

            Object.values(data).forEach(student => {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td>${student.firstName}</td>
                    <td>${student.lastName}</td>
                    <td>${student.facultyNumber}</td>
                    <td>${student.grade.toFixed(2)}</td>
                `;
                tbody.appendChild(tr);
            });
        } catch (error) {
            console.error('Failed to load students:', error);
        }
    }

    async function createStudent(event) {
        event.preventDefault(); // Prevent the form from submitting through the browser

        const student = {
            firstName: firstNameInput.value,
            lastName: lastNameInput.value,
            facultyNumber: facultyNumberInput.value,
            grade: parseFloat(gradeInput.value)
        };

        try {
            const response = await fetch(baseUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(student)
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            await loadStudents();  // Reload the list of students
        } catch (error) {
            console.error('Failed to create student:', error);
        }

        form.reset();  // Reset the form fields
    }
});