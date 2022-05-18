// import functions and grab DOM elements

import { fetchPosts, getUser, logOut } from './fetch-utils.js';
import { renderPost } from './render-utils.js';

// let state
const signInButton = document.getElementById('sign-in-button');
const logOutButton = document.getElementById('log-out-button');
const createPostButton = document.getElementById('create-post-button');
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