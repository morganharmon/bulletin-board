import { signUpUser } from '../fetch-utils.js';
import { redirectHome } from '../fetch-utils.js';

const homeButton = document.getElementById('homeButton');
const signUpForm = document.getElementById('sign-up-form');

homeButton.addEventListener('click', () => {
    window.location.href = '/';

});

signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(signUpForm);
    const user = await signUpUser(data.get('email'), data.get('password'));
    if (user) {
        redirectHome();
    }
});