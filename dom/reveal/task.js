const reveals = document.querySelectorAll('.reveal');
const viewHeight = window.innerHeight;
console.log(viewHeight); 
document.addEventListener('scroll', () => {
    reveals.forEach((element) => {
       const top = element.getBoundingClientRect().top;
       console.log(element.getBoundingClientRect().top); 
       if (top < viewHeight) {
        element.classList.add('reveal_active');
       }
       if (top < 0) {
        element.classList.remove('reveal_active');
    }
    });
});