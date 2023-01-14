const hasTooltip = Array.from(document.getElementsByClassName('has-tooltip'));
console.log(hasTooltip);


const div = document.createElement('div');
div.className = 'tooltip';
div.dataset.position = 'bottom';
   
let tooltipActive;
console.log(div);
let timerID;

hasTooltip.forEach(element => {
    element.addEventListener('click',(e) => {
        e.preventDefault();
        const left = e.target.getBoundingClientRect().left;
        const right = e.target.getBoundingClientRect().right;
        const top = e.target.getBoundingClientRect().top;
        const bottom = e.target.getBoundingClientRect().bottom;
        
        const title = element.getAttribute('title');
        div.innerHTML = title;

        if (div.dataset.position === 'right') {
            div.style.left = right + 'px';
            div.style.top = top + 'px';
        } else if (div.dataset.position === 'left') {
            div.style.left = (left - 200) + 'px';
            div.style.top = top + 'px';
        } else if (div.dataset.position === 'top') {
            div.style.left = left + 'px';
            div.style.top = (top - 25) + 'px';
        } else if (div.dataset.position === 'bottom') {
            div.style.left = left + 'px';
            div.style.top = bottom + 'px';
        }
        
        e.target.after(div);

        div.classList.add('tooltip_active');

        clearTimeout(timerID);
        timerID = setTimeout(() => {
            div.classList.remove('tooltip_active');
        }, 3000);
        
    });
});

