document.addEventListener('DOMContentLoaded', function() {
    const baseUrl = 'http://localhost:3030/jsonstore/collections/books';

    const loadBtn = document.getElementById('loadBooks');
    const submitBtn = document.getElementById('submit');
    const titleInput = document.getElementById('title');
    const authorInput = document.getElementById('author');

    loadBtn.addEventListener('click', loadBooks);
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault();
        createBook();
    });

    async function loadBooks() {
        try {
            const response = await fetch(baseUrl);
            const data = await response.json();
            updateBooksTable(data);
        } catch (error) {
            console.error('Error loading books:', error);
        }
    }

    async function createBook() {
        const title = titleInput.value.trim();
        const author = authorInput.value.trim();

        if (title === '' || author === '') {
            alert('Both title and author are required.');
            return;
        }

        const book = { title, author };
        try {
            await fetch(baseUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(book)
            });
            loadBooks();
        } catch (error) {
            console.error('Error creating book:', error);
        }

        titleInput.value = '';
        authorInput.value = '';
    }

    function updateBooksTable(data) {
        const tbody = document.querySelector('tbody');
        tbody.innerHTML = '';  // Clear the existing content

        Object.values(data).forEach(book => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>
                    <button onclick="editBook('${book.id}')">Edit</button>
                    <button onclick="deleteBook('${book.id}')">Delete</button>
                </td>
            `;
            tbody.appendChild(tr);
        });
    }

    window.editBook = async (id) => {
        try {
            const response = await fetch(`${baseUrl}/${id}`);
            if (!response.ok) {
                throw new Error('Failed to fetch book details. Status: ' + response.status);
            }
            const book = await response.json();
    
            titleInput.value = book.title;
            authorInput.value = book.author;
            submitBtn.textContent = 'Update Book';  // Change button to indicate updating
            submitBtn.onclick = () => updateBook(id);  // Reassign button action
        } catch (error) {
            console.error('Error fetching book details:', error);
        }
    };
    

    window.deleteBook = async (id) => {
        try {
            await fetch(`${baseUrl}/${id}`, { method: 'DELETE' });
            loadBooks();
        } catch (error) {
            console.error('Error deleting book:', error);
        }
    };

    window.updateBook = async (id) => {
        const updatedBook = {
            title: titleInput.value.trim(),
            author: authorInput.value.trim()
        };

        try {
            await fetch(`${baseUrl}/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedBook)
            });
            loadBooks();
        } catch (error) {
            console.error('Error updating book:', error);
        }

        submitBtn.textContent = 'Submit';
        submitBtn.onclick = createBook;
        titleInput.value = '';
        authorInput.value = '';
    };
});