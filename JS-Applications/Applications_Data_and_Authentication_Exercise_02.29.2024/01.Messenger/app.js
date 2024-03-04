function attachEvents() {
    document.getElementById('submit').addEventListener('click', sendMessage);
    document.getElementById('refresh').addEventListener('click', loadMessages);
}

async function sendMessage() {
    const author = document.querySelector('input[name="author"]').value;
    const content = document.querySelector('input[name="content"]').value;

    const response = await fetch('/jsonstore/messenger', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ author, content })
    });

    if (response.ok) {
        document.querySelector('input[name="author"]').value = '';
        document.querySelector('input[name="content"]').value = '';
    }
}

async function loadMessages() {
    const response = await fetch('/jsonstore/mesensger');
    const data = await response.json();
    const messages = Object.values(data).map(({ author, content }) => `${author}: ${content}`).join('\n');
    document.getElementById('messages').value = messages;
}

attachEvents();