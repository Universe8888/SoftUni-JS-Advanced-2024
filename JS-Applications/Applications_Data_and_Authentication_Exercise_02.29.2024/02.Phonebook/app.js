function attachEvents() {
    document.getElementById('btnLoad').addEventListener('click', loadPhonebookEntries);
    document.getElementById('btnCreate').addEventListener('click', addPhonebookEntry);
}

async function loadPhonebookEntries() {
    const response = await fetch('http://localhost:3030/jsonstore/phonebook');
    const data = await response.json();
    const phonebook = document.getElementById('phonebook');
    phonebook.innerHTML = '';
    Object.values(data).forEach(entry => {
        const li = document.createElement('li');
        li.textContent = `${entry.person}: ${entry.phone}`;
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.setAttribute('data-id', entry._id);
        deleteBtn.addEventListener('click', deletePhonebookEntry);
        li.appendChild(deleteBtn);
        phonebook.appendChild(li);
    });
}

async function addPhonebookEntry() {
    const personInput = document.getElementById('person');
    const phoneInput = document.getElementById('phone');
    const newEntry = {
        person: personInput.value,
        phone: phoneInput.value,
    };

    const response = await fetch('http://localhost:3030/jsonstore/phonebook', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newEntry)
    });

    if (response.ok) {
        personInput.value = '';
        phoneInput.value = '';
        loadPhonebookEntries();
    }
}

async function deletePhonebookEntry(event) {
    const entryId = event.target.getAttribute('data-id');
    const response = await fetch(`http://localhost:3030/jsonstore/phonebook/${entryId}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        loadPhonebookEntries(); 
    }
}

attachEvents();