function extractText() {
    let items = document.querySelectorAll('ul#items li');
    let textArea = document.querySelector('#result');
    
    for (let item of items) {
        textArea.value += item.textContent + '\n';
    }
}