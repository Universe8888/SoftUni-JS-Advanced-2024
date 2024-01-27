/**
 * @function solve
 * Inner Functions:
 * - `getElement(selector)`
 *   @param {string} selector 
 *   @returns {Element}
 *
 * - `addTask(e)`
 *   @param {Event} e 
 *   Handles the 'click' event of the 'Add' button, validates input fields, and initiates task creation.
 *
 * - `createArticle(type, btnClass1, btnClass2, task, description, date)`
 *   @param {string} type 
 *   @param {string} btnClass1
 *   @param {string} btnClass2
 *   @param {string} task
 *   @param {string} description
 *   @param {string} date
 *   Creates and appends a task article to the appropriate section of the page.
 *
 * - `deleteTask(article)`
 *   @param {HTMLElement} article
 *   Removes the specified article from the DOM.
 */

function solve() {

    function getElement(selector) {
        return document.querySelector(selector);
    }
    
    const taskField = getElement('#task');
    const descriptionField = getElement('#description');
    const dateField = getElement('#date');
    const addBtn = getElement('#add');
    
    const sections = document.querySelectorAll('section');
    const openArea = sections[1].querySelector('div:nth-child(2)');
    const progressArea = sections[2].querySelector('div:nth-child(2)');
    const completeArea = sections[3].querySelector('div:nth-child(2)');
    

    addBtn.addEventListener('click', function addTask(e) {
        e.preventDefault();
        const task = taskField.value;
        const description = descriptionField.value;
        const date = dateField.value;

        if (!task || !description || !date) {
            return;
        }

        createArticle('OpenTask', 'green', 'red', task, description, date);

        function createArticle(type, btnClass1, btnClass2, task, description, date) {
            const article = document.createElement('article');
            const h3 = document.createElement('h3');
            h3.textContent = task;
            const p1 = document.createElement('p');
            p1.textContent = `Description: ${description}`;
            const p2 = document.createElement('p');
            p2.textContent = `Due Date: ${date}`;

            article.appendChild(h3);
            article.appendChild(p1);
            article.appendChild(p2);

            if (type === 'OpenTask') {
                const divEl = document.createElement('div');
                divEl.className = 'flex';
                const btn1 = document.createElement('button');
                btn1.textContent = 'Start';
                btn1.className = btnClass1;
                btn1.addEventListener('click', () => {
                    deleteTask(article);
                    createArticle('ProgressTask', 'red', 'orange', task, description, date);
                });

                const btn2 = document.createElement('button');
                btn2.textContent = 'Delete';
                btn2.className = btnClass2;
                btn2.addEventListener('click', () => deleteTask(article));

                divEl.appendChild(btn1);
                divEl.appendChild(btn2);
                article.appendChild(divEl);
                openArea.appendChild(article);
            } else if (type === 'ProgressTask') {
                const divEl = document.createElement('div');
                divEl.className = 'flex';
                const btn1 = document.createElement('button');
                btn1.textContent = 'Delete';
                btn1.className = btnClass1;
                btn1.addEventListener('click', () => deleteTask(article));

                const btn2 = document.createElement('button');
                btn2.textContent = 'Finish';
                btn2.className = btnClass2;
                btn2.addEventListener('click', () => {
                    deleteTask(article);
                    createArticle('CompleteTask', null, null, task, description, date);
                });

                divEl.appendChild(btn1);
                divEl.appendChild(btn2);
                article.appendChild(divEl);
                progressArea.appendChild(article);
            } else if (type === 'CompleteTask') {
                completeArea.appendChild(article);
            }

            function deleteTask(article) {
                article.remove();
            }
        }
    });
}