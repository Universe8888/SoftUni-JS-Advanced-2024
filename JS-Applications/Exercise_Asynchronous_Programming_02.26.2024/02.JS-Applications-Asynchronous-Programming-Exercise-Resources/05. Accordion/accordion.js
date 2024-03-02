async function solution() {
    const main = document.getElementById('main');

    const response = await fetch('http://localhost:3030/jsonstore/advanced/articles/list');
    const data = await response.json();

    data.forEach(article => {
        const divAccordion = document.createElement('div');
        divAccordion.className = 'accordion';

        divAccordion.innerHTML = `
            <div class="head">
                <span>${article.title}</span>
                <button class="button" id="${article._id}">More</button>
            </div>
            <div class="extra">
                <p></p>
            </div>
        `;

        main.appendChild(divAccordion);

        const button = divAccordion.querySelector('.button');
        button.addEventListener('click', async () => {
            const extraDiv = button.parentElement.nextElementSibling;
            if (button.textContent === 'More') {
                const detailsResponse = await fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${article._id}`);
                const detailsData = await detailsResponse.json();

                extraDiv.style.display = 'block';
                extraDiv.querySelector('p').textContent = detailsData.content;
                button.textContent = 'Less';
            } else {
                extraDiv.style.display = 'none';
                button.textContent = 'More';
            }
        });
    });
}

solution();