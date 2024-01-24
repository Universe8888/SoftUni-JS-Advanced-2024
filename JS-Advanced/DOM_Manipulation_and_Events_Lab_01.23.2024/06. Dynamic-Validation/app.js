function validate() {
    let input = document.querySelector('#email');
    input.addEventListener('change', onChange);

    function onChange(ev) {
        let regex = /^[a-z]+@[a-z]+\.[a-z]+$/;
        if (regex.test(ev.target.value)) {
            ev.target.classList.remove('error');
        } else {
            ev.target.classList.add('error');
        }
    }
}