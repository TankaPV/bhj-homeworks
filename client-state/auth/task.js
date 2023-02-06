const signinForm = document.getElementById('signin__form');
const welcomeActive = document.getElementById('welcome');
const userId = document.getElementById('user_id');
const signin = document.getElementById('signin');
exit = document.getElementById('exit');

const submit = signinForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(signinForm);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');    
    xhr.responseType = 'json';
    xhr.send(formData);
    signinForm.reset();

    xhr.addEventListener('load', () => {
        if (xhr.status !== 201) {
            alert(`Ошибка ${xhr.status}: ${xhr.statusText}`);
            return;
        }     
        const response = xhr.response;
        if (response.success) {
            welcomeActive.classList.add('welcome_active');
            signin.classList.remove('signin_active');
            exit.classList.add('exit_active');
            userId.textContent = response.user_id;
            localStorage.id = response.user_id;
        } else {
            alert('Неверный логин/пароль');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.id) {
        welcomeActive.classList.add('welcome_active');
        signin.classList.remove('signin_active');
        exit.classList.add('exit_active');
        userId.textContent = localStorage.id;
    } 
});

exit.addEventListener('click', () => {
    welcomeActive.classList.remove('welcome_active');
    signin.classList.add('signin_active');
    exit.classList.remove('exit_active');
    localStorage.clear();
});