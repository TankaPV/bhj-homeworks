const slider = document.querySelectorAll('div.slider__item');

const prev = document.querySelector('div.slider__arrow_prev');
const next = document.querySelector('div.slider__arrow_next');

const arr =  Array.from(slider);
console.log(arr);

const sliderDot = Array.from(document.querySelectorAll('div.slider__dot'));
console.log(sliderDot);

const countArr = () => arr.forEach((item,idx) => {
    if (item.className.includes('slider__item_active')) {
        item.classList.remove('slider__item_active');
        sliderDot[idx].classList.remove('slider__dot_active');
    }
});

let numb = 0;
next.onclick = () => {
    
    countArr();

    if (numb >= arr.length - 1) {
       numb = 0; 
    } else {
        numb = numb + 1;
    }
    console.log(numb);
    arr[numb].classList.add('slider__item_active'); 
    sliderDot[numb].classList.add('slider__dot_active'); 
}

prev.onclick = () => {
    
    countArr();

    if (numb === 0) {
       numb = arr.length - 1; 
    } else {
        numb = numb - 1;
    }
    console.log(numb);
    arr[numb].classList.add('slider__item_active');
    sliderDot[numb].classList.add('slider__dot_active');
}

sliderDot.forEach((item, idx) => {
    
    item.onclick = () => {
        const sliderDotActive = document.querySelector('div.slider__dot_active');
        const sliderActive = document.querySelector('div.slider__item_active');

        if (sliderDotActive) {
            sliderDotActive.classList.remove('slider__dot_active'); 
            sliderActive.classList.remove('slider__item_active');
        }

        item.classList.add('slider__dot_active');
        arr[idx].classList.add('slider__item_active');
         
    }
});

