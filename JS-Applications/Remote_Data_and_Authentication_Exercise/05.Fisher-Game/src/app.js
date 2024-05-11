document.addEventListener('DOMContentLoaded', () => {
    const userSessionData = sessionStorage.getItem('userData');
    const loginLink = document.getElementById('login');
    const logoutLink = document.getElementById('logout');
    const registerLink = document.getElementById('register');
    const catches = document.querySelectorAll('.catch');
    const addButton = document.querySelector('.add');

    // Toggle UI elements based on user login state
    if (userSessionData) {
        loginLink.style.display = 'none';
        registerLink.style.display = 'none';
        logoutLink.style.display = 'block';
        catches.forEach(catchElement => {
            const updateBtn = catchElement.querySelector('.update');
            const deleteBtn = catchElement.querySelector('.delete');
            updateBtn.disabled = false;
            deleteBtn.disabled = false;
        });
        addButton.disabled = false;
    } else {
        loginLink.style.display = 'block';
        registerLink.style.display = 'block';
        logoutLink.style.display = 'none';
        catches.forEach(catchElement => {
            const updateBtn = catchElement.querySelector('.update');
            const deleteBtn = catchElement.querySelector('.delete');
            updateBtn.disabled = true;
            deleteBtn.disabled = true;
        });
        addButton.disabled = true;
    }

    // Handle logout functionality
    logoutLink.addEventListener('click', () => {
        sessionStorage.removeItem('userData');
        window.location.reload(); // Refresh the page to update UI
    });
});
