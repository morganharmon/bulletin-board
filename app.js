// import functions and grab DOM elements

import { fetchPosts, getUser, logOut, deletePost, editPost } from './fetch-utils.js';
import { renderPost } from './render-utils.js';

// let state
const signInButton = document.getElementById('sign-in-button');
const logOutButton = document.getElementById('log-out-button');
const createPostButton = document.getElementById('create-post-button');
const deleteButton = document.getElementById('delete-button');
const editButton = document.getElementById('edit-button');
const postSec = document.getElementById('postSec');

// set event listeners 
signInButton.addEventListener('click', () => {
    window.location.href = './login';
});

createPostButton.addEventListener('click', () => {
    window.location.href = './create post';
});

logOutButton.addEventListener('click', async () => {
    await logOut();

});

deleteButton.addEventListener('click', async () => {
    const posts = await fetchPosts();
    const prompt = window.prompt('Post title?', 'enter title');
    for (let post of posts) {
        if (prompt.toLowerCase() === post.title.toLowerCase()) {
            const confirm = window.confirm(`Delete post: "${post.title} - ${post.description} - ${post.contact}"?`);
            if (confirm) {
                await deletePost(post);
            } else {
                return;
            }
        }
    }
});

editButton.addEventListener('click', async () => {
    const posts = await fetchPosts();
    const prompt = window.prompt('Post title?', 'enter title');
    for (let post of posts) {
        if (prompt.toLowerCase() === post.title.toLowerCase()) {
            const title = window.prompt('Enter new post title:');
            const description = window.prompt('Enter new description:', post.description);
            const contact = window.prompt('Enter new contact', post.contact);
            const obj = { id: post.id, title: title, description: description, contact: contact };
            await editPost(obj);
            window.location.href = '/';
        }
    }
});

window.addEventListener('load', async () => {
    const user = await getUser();
    if (user) {
        signInButton.classList.add('hidden');
        logOutButton.classList.remove('hidden');
    } else {
        signInButton.classList.remove('hidden');
        logOutButton.classList.add('hidden');
    }
    const posts = await fetchPosts();
    for (let post of posts) {
        const div = renderPost(post);
        postSec.append(div);
    }

});