function validate() {
    let email = document.getElementById('email');
    email.addEventListener('change', onChange);

    function onChange(ev) {
        let email = ev.target.value;
        let pattern = /^[a-z]+@[a-z]+\.[a-z]+$/;
        if (pattern.test(email)) {
            ev.target.className = '';
        } else {
            ev.target.className = 'error';
        }
    }
}