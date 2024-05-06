function attachEvents() {
    const baseUrl = 'http://localhost:3030/jsonstore/messenger';
    const messages = document.getElementById('messages');
    const author = document.querySelector('input[name="author"]');
    const content = document.querySelector('input[name="content"]');
    const submitBtn = document.getElementById('submit');
    const refreshBtn = document.getElementById('refresh');

    submitBtn.addEventListener('click', sendMessage);
    refreshBtn.addEventListener('click', refreshMessages);

    function sendMessage() {
        if (author.value === '' || content.value === '') {
            return;
        }

        const message = { author: author.value, content: content.value };

        fetch(baseUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(message)
        })
            .then(response => response.json())
            .then(() => {
                author.value = '';
                content.value = '';
                refreshMessages();
            });
    }

    function refreshMessages() {
        messages.innerHTML = '';

        fetch(baseUrl)
            .then(response => response.json())
            .then(data => {
                Object.values(data).forEach(message => {
                    const { author, content } = message;
                    const messageText = `${author}: ${content}`;
                    messages.innerHTML += messageText + '\n';
                });
            });
    }

    refreshMessages();
}

attachEvents();