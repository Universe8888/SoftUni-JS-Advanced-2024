/**
 * @param {Event} e
 * @returns {void}
 */

function lockedProfile() {
    let buttons = document.getElementsByTagName('button');

    Array.from(buttons).forEach(btn => { btn.addEventListener('click', showMore) });

    function showMore(e) {
        let profile = e.target.parentElement;
        let isActive = profile.querySelector('input[type="radio"][value="unlock"]').checked;

        if (isActive) {
            let div = profile.querySelector('div');
            let isVisible = div.style.display === 'block';

            if (isVisible) {
                div.style.display = 'none';
                e.target.textContent = 'Show more';
            } else {
                div.style.display = 'block';
                e.target.textContent = 'Hide it';
            }
        }
    }
}