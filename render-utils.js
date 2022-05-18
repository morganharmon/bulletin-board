export function renderPost(post) {
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');

    h2.textContent = post.title;
    p1.textContent = post.description;
    p2.textContent = post.contact;
    div.classList.add('post');

    div.append(h2, p1, p2);
    return div;

}