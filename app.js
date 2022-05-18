// import functions and grab DOM elements

import { logOut } from './fetch-utils.js';

// let state
const signInButton = document.getElementById('sign-in-button');
const logOutButton = document.getElementById('log-out-button')
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

