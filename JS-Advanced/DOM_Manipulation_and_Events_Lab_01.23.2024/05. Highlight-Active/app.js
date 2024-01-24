function focused() {
    let inputs = document.querySelectorAll('input[type="text"]');

    function focus(event) {
        event.target.parentNode.className = 'focused';
    }

    function blur(event) {
        event.target.parentNode.className = '';
    }

    function attachEvents() {
        for (let input of inputs) {
            input.addEventListener('focus', focus);
            input.addEventListener('blur', blur);
        }
    }

    attachEvents();
}