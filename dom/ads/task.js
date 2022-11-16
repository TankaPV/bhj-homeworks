const allP = Array.from(document.querySelectorAll('p'));
console.log(allP);

allP.forEach((element) => {
    const rotators = element.querySelector('.rotator');
    let currentRotator = rotators.firstElementChild;
    let colorSet = currentRotator.dataset.color;  
    currentRotator.style.color = colorSet; 
    let speedSet = currentRotator.dataset.speed;
    
    setInterval(() => {
        currentRotator.classList.remove('rotator__case_active');
        currentRotator = currentRotator.nextElementSibling;
        if (currentRotator === null) {
            currentRotator = rotators.firstElementChild;
            currentRotator.classList.add('rotator__case_active');
            speedSet = currentRotator.dataset.speed;
            console.log(speedSet);
            return;
        }
        currentRotator.classList.add('rotator__case_active');
        colorSet = currentRotator.dataset.color;
        currentRotator.style.color = colorSet;
        speedSet = currentRotator.dataset.speed;
        console.log(speedSet);
    }, speedSet);
    
});
