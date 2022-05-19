const SUPABASE_URL = 'https://yxfajitmasxbcohtbkqt.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl4ZmFqaXRtYXN4YmNvaHRia3F0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTIyODY4MTEsImV4cCI6MTk2Nzg2MjgxMX0.2L8306PS1qjxKhAvOhaxYHjp8eowvQquvK3yZw7Nyj8';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function signUpUser(email, password) {
    const response = await client.auth.signUp({ email, password });
    if (response.user) {
        return response.user;
    } else {
        console.error(response.error);
    }
}

export async function redirectHome() {
    if ((getUser)) {
        window.location.href = '/';
    }
}

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });
    if (response.user) {
        return response.user;
    } else {
        console.error(response.user);
    }
}

export async function logOut() {
    await client.auth.signOut();
    return (window.location.href = '/');
}

export async function checkAuth() {
    const user = getUser();
    if (!user) window.location.href = '../login';
}

export async function fetchPosts() {
    const response = await client.from('bulletin-board').select('*');
    return response.data;
}

export async function createNewPost(post) {
    const response = await client.from('bulletin-board').insert(post);
    if (response.data) {
        return response.data;
    } else {
        console.error(response.error);
    }
}

export async function deletePost(post) {
    await client.from('bulletin-board').delete().match({ id: post.id });
    window.location.href = '/';
    return;
}

export async function editPost(post) {
    await client.from('bulletin-board').update({ title: post.title, description: post.description, contact: post.contact }).match({ id: post.id });
    return;
}