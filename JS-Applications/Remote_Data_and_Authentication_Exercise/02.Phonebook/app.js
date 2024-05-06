function attachEvents() {
   const baseUrl = 'http://localhost:3030/jsonstore/phonebook';
    const phonebookUl = document.getElementById('phonebook');
    const personInput = document.getElementById('person');
    const phoneInput = document.getElementById('phone');
    const loadBtn = document.getElementById('btnLoad');
    const createBtn = document.getElementById('btnCreate');

    loadBtn.addEventListener('click', loadPhonebook);
    createBtn.addEventListener('click', createPhonebook);

    function loadPhonebook() {
        fetch(baseUrl)
            .then(res => res.json())
            .then(data => {
                phonebookUl.innerHTML = '';
                Object.entries(data).forEach(([id, phonebook]) => {
                    const li = document.createElement('li');
                    li.textContent = `${phonebook.person}: ${phonebook.phone}`;
                    const deleteBtn = document.createElement('button');
                    deleteBtn.textContent = 'Delete';
                    deleteBtn.addEventListener('click', () => {
                        fetch(`${baseUrl}/${id}`, {
                            method: 'DELETE'
                        })
                            .then(loadPhonebook);
                    });
                    li.appendChild(deleteBtn);
                    phonebookUl.appendChild(li);
                });
            });
    }

    function createPhonebook() {
        const person = personInput.value;
        const phone = phoneInput.value;

        if (person === '' || phone === '') {
            return;
        }

        fetch(baseUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ person, phone })
        })
            .then(res => res.json())
            .then(data => {
                personInput.value = '';
                phoneInput.value = '';
                loadPhonebook();
            });
    }
}

attachEvents();