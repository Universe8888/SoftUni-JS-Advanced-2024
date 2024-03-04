document.addEventListener('DOMContentLoaded', () => {
    attachEvents();
    loadStudents();
});

function attachEvents() {
    document.getElementById('submit').addEventListener('click', async (event) => {
        event.preventDefault(); 
        await createStudent();
        await loadStudents(); 
    });
}

async function loadStudents() {
    const response = await fetch('http://localhost:3030/jsonstore/collections/students');
    const data = await response.json();
    const tbody = document.querySelector('#results tbody');
    tbody.innerHTML = ''; 

    Object.values(data).forEach(student => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${student.firstName}</td>
            <td>${student.lastName}</td>
            <td>${student.facultyNumber}</td>
            <td>${student.grade}</td>
        `;
        tbody.appendChild(tr);
    });
}

async function createStudent() {
    const firstName = document.querySelector('input[name="firstName"]').value;
    const lastName = document.querySelector('input[name="lastName"]').value;
    const facultyNumber = document.querySelector('input[name="facultyNumber"]').value;
    const grade = document.querySelector('input[name="grade"]').value;

    const newStudent = {
        firstName,
        lastName,
        facultyNumber,
        grade: Number(grade)
    };

    await fetch('http://localhost:3030/jsonstore/collections/students', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newStudent)
    });

    document.querySelector('input[name="firstName"]').value = '';
    document.querySelector('input[name="lastName"]').value = '';
    document.querySelector('input[name="facultyNumber"]').value = '';
    document.querySelector('input[name="grade"]').value = '';
}