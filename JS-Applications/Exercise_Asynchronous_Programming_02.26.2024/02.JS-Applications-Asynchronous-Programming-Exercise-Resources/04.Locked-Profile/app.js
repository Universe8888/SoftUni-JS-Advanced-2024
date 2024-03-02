async function lockedProfile() {
    const profilesContainer = document.getElementById('main');
    const profiles = await fetch('http://localhost:3030/jsonstore/advanced/profiles')
        .then(res => res.json());

    profilesContainer.innerHTML = '';
    Object.entries(profiles).forEach(([id, profileData], index) => {
        const profileHTML = `
            <div class="profile">
                <img src="./iconProfile2.png" class="userIcon" />
                <label>Lock</label>
                <input type="radio" name="user${index + 1}Locked" value="lock" checked>
                <label>Unlock</label>
                <input type="radio" name="user${index + 1}Locked" value="unlock"><br>
                <hr>
                <label>Username</label>
                <input type="text" name="user${index + 1}Username" value="${profileData.username}" disabled readonly />
                <div id="user${index + 1}HiddenFields" style="display: none;">
                    <hr>
                    <label>Email:</label>
                    <input type="email" name="user${index + 1}Email" value="${profileData.email}" disabled readonly />
                    <label>Age:</label>
                    <input type="text" name="user${index + 1}Age" value="${profileData.age}" disabled readonly />
                </div>
                <button onclick="toggleInfo(${index + 1})">Show more</button>
            </div>`;
        profilesContainer.innerHTML += profileHTML;
    });
}

function toggleInfo(index) {
    const hiddenInfo = document.getElementById(`user${index}HiddenFields`);
    const lockStatus = document.querySelector(`input[name="user${index}Locked"]:checked`).value;
    const button = hiddenInfo.parentElement.querySelector('button');

    if (lockStatus === 'unlock') {
        if (button.textContent === 'Show more') {
            hiddenInfo.style.display = 'block';
            button.textContent = 'Hide it';
        } else {
            hiddenInfo.style.display = 'none';
            button.textContent = 'Show more';
        }
    }
}