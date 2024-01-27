/**
 * @param {string} movieName
 * @param {string} movieHall
 * @param {number} moviePrice
 * @returns {HTMLElement}
 */

function solve() {
    const [name, hall, price] = document.querySelectorAll('#container input');
    const movies = document.querySelector('#movies ul');
    const archive = document.querySelector('#archive ul');
    const clearBtn = document.querySelector('#archive button');

    document.querySelector('#container button').addEventListener('click', addMovie);

    function addMovie(e) {
        e.preventDefault();

        if (name.value && hall.value && Number(price.value) || price.value === '0') {

            const li = document.createElement('li');
            const span = document.createElement('span');
            span.textContent = name.value;
            const strong = document.createElement('strong');
            strong.textContent = `Hall: ${hall.value}`;
            const div = document.createElement('div');
            const strongDiv = document.createElement('strong');
            strongDiv.textContent = Number(price.value).toFixed(2);
            const input = document.createElement('input');
            input.placeholder = 'Tickets Sold';
            const btn = document.createElement('button');
            btn.textContent = 'Archive';

            li.appendChild(span);
            li.appendChild(strong);
            div.appendChild(strongDiv);
            div.appendChild(input);
            div.appendChild(btn);
            li.appendChild(div);

            movies.appendChild(li);

            name.value = null;
            hall.value = null;
            price.value = null;

            btn.addEventListener('click', archiveMovie);
        }
    }

    function archiveMovie(e) {
        const li = e.target.parentNode.parentNode;
        const span = li.querySelector('span');
        const strong = li.querySelector('strong');
        const div = li.querySelector('div');
        const strongDiv = div.querySelector('strong');
        const input = div.querySelector('input');
        const btn = div.querySelector('button');

        if (Number(input.value) || input.value === '0') {

            const liArchive = document.createElement('li');
            const spanArchive = document.createElement('span');
            spanArchive.textContent = span.textContent;
            const strongArchive = document.createElement('strong');
            strongArchive.textContent = `Total amount: ${(Number(strongDiv.textContent) * Number(input.value)).toFixed(2)}`;
            const btnArchive = document.createElement('button');
            btnArchive.textContent = 'Delete';

            liArchive.appendChild(spanArchive);
            liArchive.appendChild(strongArchive);
            liArchive.appendChild(btnArchive);

            archive.appendChild(liArchive);

            li.remove();

            btnArchive.addEventListener('click', deleteMovie);
        }
    }

    function deleteMovie(e) {
        e.target.parentNode.remove();

        if (archive.children.length === 0) {
            clearBtn.style.display = 'none';
        }
    
    }

    clearBtn.addEventListener('click', () => archive.innerHTML = null);
}

// 100/100 judge


// second solution

function solve() {
    const [name, hall, price] = document.querySelectorAll('#container input');
    const movies = document.querySelector('#movies ul');
    const archive = document.querySelector('#archive ul');
    const clearBtn = document.querySelector('#archive button');

    document.querySelector('#container button').addEventListener('click', addMovie);

    function addMovie(e) {
        e.preventDefault();

        if (!name.value || !hall.value || !isValidPrice(price.value)) {
            return;
        }

        const movieElement = createMovieElement(name.value, hall.value, price.value);
        movies.appendChild(movieElement);

        clearInputs();

        function createMovieElement(movieName, movieHall, moviePrice) {
            const li = document.createElement('li');
            const span = document.createElement('span');
            span.textContent = movieName;
            const strong = document.createElement('strong');
            strong.textContent = `Hall: ${movieHall}`;
            const div = createMovieControls(moviePrice);

            li.appendChild(span);
            li.appendChild(strong);
            li.appendChild(div);

            return li;
        }

        function createMovieControls(price) {
            const div = document.createElement('div');
            const strongDiv = document.createElement('strong');
            strongDiv.textContent = Number(price).toFixed(2);
            const input = document.createElement('input');
            input.placeholder = 'Tickets Sold';
            const btn = document.createElement('button');
            btn.textContent = 'Archive';
            btn.addEventListener('click', archiveMovie);

            div.appendChild(strongDiv);
            div.appendChild(input);
            div.appendChild(btn);

            return div;
        }

        function clearInputs() {
            name.value = '';
            hall.value = '';
            price.value = '';
        }
    }

    function isValidPrice(value) {
        const number = Number(value);
        return !isNaN(number) && number >= 0;
    }

    function archiveMovie(e) {
        const li = e.target.parentNode.parentNode;
        const input = li.querySelector('input');
        
        if (!isValidTicketCount(input.value)) {
            return;
        }

        const archiveElement = createArchiveElement(li);
        archive.appendChild(archiveElement);
        li.remove();

        function isValidTicketCount(value) {
            const number = Number(value);
            return !isNaN(number) && number >= 0;
        }

        function createArchiveElement(movieElement) {
            const span = movieElement.querySelector('span');
            const strongDiv = movieElement.querySelector('div strong');
            const input = movieElement.querySelector('input');

            const liArchive = document.createElement('li');
            const spanArchive = document.createElement('span');
            spanArchive.textContent = span.textContent;
            const strongArchive = document.createElement('strong');
            strongArchive.textContent = `Total amount: ${(Number(strongDiv.textContent) * Number(input.value)).toFixed(2)}`;
            const btnArchive = document.createElement('button');
            btnArchive.textContent = 'Delete';
            btnArchive.addEventListener('click', deleteMovie);

            liArchive.appendChild(spanArchive);
            liArchive.appendChild(strongArchive);
            liArchive.appendChild(btnArchive);

            return liArchive;
        }
    }

    function deleteMovie(e) {
        e.target.parentNode.remove();
        updateClearButtonVisibility();

        function updateClearButtonVisibility() {
            clearBtn.style.display = archive.children.length === 0 ? 'none' : '';
        }
    }

    clearBtn.addEventListener('click', () => archive.innerHTML = '');
}

// 80/100 judge