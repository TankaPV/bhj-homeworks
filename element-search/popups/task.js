let modalMain = document.getElementById('modal_main');
modalMain.classList.add('modal_active');

const elements = document.getElementsByClassName('modal__close');
const arr = Array.from(elements);

const showSuccess = document.querySelector('.show-success');
const modalSuccess = document.getElementById('modal_success');

arr.forEach((item) => {
    item.onclick = () => {   
    modalMain.classList.remove('modal_active');
    modalSuccess.classList.remove('modal_active');
    }        
})

showSuccess.onclick = () => {    
    modalSuccess.classList.add('modal_active');
}




    



