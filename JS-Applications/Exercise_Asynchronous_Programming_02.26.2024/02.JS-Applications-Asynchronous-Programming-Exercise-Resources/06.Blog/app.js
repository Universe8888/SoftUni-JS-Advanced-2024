async function attachEvents() {
    const postsSelect = document.getElementById('posts');
    const loadPostsBtn = document.getElementById('btnLoadPosts');
    const viewPostBtn = document.getElementById('btnViewPost');

    loadPostsBtn.addEventListener('click', async () => {
        const postsResponse = await fetch('http://localhost:3030/jsonstore/blog/posts');
        const postsData = await postsResponse.json();

        postsSelect.innerHTML = '';
        for (const postId in postsData) {
            const postOption = new Option(postsData[postId].title, postId);
            postsSelect.add(postOption);
        }
    });

    viewPostBtn.addEventListener('click', async () => {
        const postId = postsSelect.value;
        const [postResponse, commentsResponse] = await Promise.all([
            fetch(`http://localhost:3030/jsonstore/blog/posts/${postId}`),
            fetch('http://localhost:3030/jsonstore/blog/comments')
        ]);

        const postData = await postResponse.json();
        const commentsData = await commentsResponse.json();

        document.getElementById('post-title').textContent = postData.title;
        document.getElementById('post-body').textContent = postData.body;

        const commentsList = document.getElementById('post-comments');
        commentsList.innerHTML = '';

        Object.values(commentsData)
            .filter(comment => comment.postId === postId)
            .forEach(comment => {
                const commentItem = document.createElement('li');
                commentItem.textContent = comment.text;
                commentsList.appendChild(commentItem);
            });
    });
}

attachEvents();