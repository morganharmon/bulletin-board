// import functions and grab DOM elements

// let state
const signInButton = document.getElementById('sign-in-button');
const createPostButton = document.getElementById('create-post-button');
const postSec = document.getElementById('postSec');

// set event listeners 
signInButton.addEventListener('click', () => {
    window.location.href = './login';
});
createPostButton.addEventListener('click', () => {
    window.location.href = './create post';
});