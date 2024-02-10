window.addEventListener('load', solve);

function solve() {
    const nextButton = document.getElementById('next-btn');
    const firstNameInput = document.getElementById('first-name');
    const lastNameInput = document.getElementById('last-name');
    const checkInInput = document.getElementById('date-in');
    const checkOutInput = document.getElementById('date-out');
    const guestsInput = document.getElementById('people-count');
    const infoList = document.querySelector('.info-list');
    const confirmList = document.querySelector('.confirm-list');
    const verification = document.getElementById('verification');

    nextButton.addEventListener('click', function(e) {
        e.preventDefault();
        
        if (!firstNameInput.value || !lastNameInput.value || !checkInInput.value || 
            !checkOutInput.value || !guestsInput.value) {
            return;
        }

        const reservationItem = createReservationItem(
            firstNameInput.value, 
            lastNameInput.value, 
            checkInInput.value, 
            checkOutInput.value, 
            guestsInput.value
        );

        infoList.appendChild(reservationItem);

        clearAndDisableFields();

        reservationItem.querySelector('.edit-btn').addEventListener('click', function() {
            editReservation(reservationItem);
        });

        reservationItem.querySelector('.continue-btn').addEventListener('click', function() {
            continueReservation(reservationItem);
        });
    });

    function clearAndDisableFields() {
        firstNameInput.value = '';
        lastNameInput.value = '';
        checkInInput.value = '';
        checkOutInput.value = '';
        guestsInput.value = '';
        nextButton.disabled = true;
    }

    function createReservationItem(firstName, lastName, checkInDate, checkOutDate, guests) {
        const listItem = document.createElement('li');
        listItem.classList.add('reservation-content');
        listItem.innerHTML = `
            <article>
                <h3>Name: ${firstName} ${lastName}</h3>
                <p>From date: ${checkInDate}</p>
                <p>To date: ${checkOutDate}</p>
                <p>For ${guests} people</p>
            </article>
            <button class="edit-btn">Edit</button>
            <button class="continue-btn">Continue</button>
        `;
        return listItem;
    }

    function editReservation(listItem) {
        const article = listItem.querySelector('article');
        firstNameInput.value = article.children[0].textContent.replace('Name: ', '').split(' ')[0];
        lastNameInput.value = article.children[0].textContent.replace('Name: ', '').split(' ')[1];
        checkInInput.value = article.children[1].textContent.replace('From date: ', '');
        checkOutInput.value = article.children[2].textContent.replace('To date: ', '');
        guestsInput.value = article.children[3].textContent.replace('For ', '').replace(' people', '');
        nextButton.disabled = false;
        infoList.removeChild(listItem);
    }

    function continueReservation(listItem) {
        confirmList.appendChild(listItem);
        listItem.querySelector('.edit-btn').classList.replace('edit-btn', 'confirm-btn');
        listItem.querySelector('.continue-btn').classList.replace('continue-btn', 'cancel-btn');

        listItem.querySelector('.confirm-btn').textContent = 'Confirm';
        listItem.querySelector('.confirm-btn').addEventListener('click', function() {
            confirmReservation(listItem);
        });

        listItem.querySelector('.cancel-btn').textContent = 'Cancel';
        listItem.querySelector('.cancel-btn').addEventListener('click', function() {
            cancelReservation(listItem);
        });
    }

    function confirmReservation(listItem) {
        nextButton.disabled = false;
        verification.textContent = 'Confirmed.';
        verification.className = 'reservation-confirmed';
        confirmList.removeChild(listItem);
    }

    function cancelReservation(listItem) {
        nextButton.disabled = false;
        verification.textContent = 'Cancelled.';
        verification.className = 'reservation-cancelled';
        confirmList.removeChild(listItem);
    }
}