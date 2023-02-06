const subscribeModal = document.getElementById('subscribe-modal');
const modalClose = document.querySelector('.modal__close');

modalClose.addEventListener('click', (e) => {
    e.preventDefault();
    subscribeModal.classList.remove('modal_active');
    document.cookie = 'name=close';
    console.log(document.cookie);
});

document.addEventListener('DOMContentLoaded', () => {
    if (!document.cookie) {
        subscribeModal.classList.add('modal_active');
    }
});