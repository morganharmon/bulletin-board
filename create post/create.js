import { createNewPost } from '../fetch-utils.js';

const homeButton = document.getElementById('homeButton');
const form = document.getElementById('form');

homeButton.addEventListener('click', () => {
    window.location.href = '/';

});

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    console.log(data);
    const post = {
        title: data.get('title'),
        description: data.get('description'),
        contact: data.get('contact')
    };
    await createNewPost(post);
    window.location.href = '/';
});