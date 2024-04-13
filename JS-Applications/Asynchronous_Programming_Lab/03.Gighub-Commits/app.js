function loadCommits() {
    let username = document.getElementById('username').value;
    let repo = document.getElementById('repo').value;
    let ul = document.getElementById('commits');
    let url = `https://api.github.com/repos/${username}/${repo}/commits`;

    fetch(url)
        .then(response => {
            if (response.status >= 400) {
                throw new Error('Invalid request');
            }
            return response.json();
        }
        )

        .then(data => {
            ul.innerHTML = '';
            data.forEach(element => {
                let li = document.createElement('li');
                li.textContent = `${element.commit.author.name}: ${element.commit.message}`;
                ul.appendChild(li);
            });
        })

        .catch(err => {
            let li = document.createElement('li');
            li.textContent = `Error: ${err.message} (Not Found)`;
            ul.appendChild(li);
        });

    document.getElementById('username').value = '';
    document.getElementById('repo').value = '';
}