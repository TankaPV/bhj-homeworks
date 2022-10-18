const slider = document.querySelectorAll('div.slider__item');

const prev = document.querySelector('div.slider__arrow_prev');
const next = document.querySelector('div.slider__arrow_next');

const arrSlider =  Array.from(slider);
console.log(arrSlider);

const arrDot = Array.from(document.querySelectorAll('div.slider__dot'));
console.log(arrDot);

func = () => {

    let numb = 0;
    next.onclick = () => {

        const foundActive = arrSlider.findIndex((item) => item.className.includes('slider__item_active'));
        numb = foundActive + 1;

        funcActiv(numb);
        
    }

    prev.onclick = () => {

        const foundActive = arrSlider.findIndex((item) => item.className.includes('slider__item_active'));
        numb = foundActive - 1;

        funcActiv(numb);
    
    }

    arrDot.forEach((item,idx) => {
        
        item.onclick = () => {
            
            funcActiv(idx);
            
        }
    });
};
func();

function funcActiv(n) {
    let val = n;
    const active = arrSlider.findIndex((item) => item.className.includes('slider__item_active'));
        
    arrSlider[active].classList.remove('slider__item_active');
    arrDot[active].classList.remove('slider__dot_active');

    if (n < 0) {
        val = arrSlider.length-1
    }

    if (n > arrSlider.length-1) {
        val = 0;
    }

    arrSlider[val].classList.add('slider__item_active');
    arrDot[val].classList.add('slider__dot_active');
}

