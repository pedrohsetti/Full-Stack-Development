const output = document.querySelector('#output');
const button = document.querySelector('#get-posts-btn');
const form = document.querySelector('#add-post-form');

// get and show posts
async function showPosts() {
    const response = await fetch('http://localhost:8080/api/posts');
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    try {
        
    const posts = await response.json();
    output.innerHTML = '';
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.textContent = post. title;
        output.appendChild(postElement);
    })
    } catch (error) {
        console.error('Error parsing JSON:', error);
    }
}

//submit new post
async function submitPost(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const title = formData.get('title');
    try {
        const response = await fetch('http://localhost:8080/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title })
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const newPost = await response.json();
        const postElement = document.createElement('div');
        postElement.textContent = newPost.title;
        output.appendChild(postElement);
        showPosts(); // Refresh the list of posts
    } catch (error) {
        console.error('Error submitting post:', error);
    }
}

// event listener for button click
button.addEventListener('click', showPosts);
form.addEventListener('submit', submitPost);