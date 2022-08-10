const element = document.getElementById("cookie");
const clickerCounter = document.getElementById("clicker__counter");
const clickerSpeed = document.getElementById("clicker__speed");
let date1 = 0, date2;


element.onclick = () => {
    

    clickerCounter.textContent = Number(clickerCounter.textContent) + 1;
    
    if (Number(clickerCounter.textContent) % 2 === 0) {
        element.width = 200;
        date1 = Date.now();
    } else {
        element.width = 100;
        date2 = Date.now();
    }

    if (date1 === 0) {
        return;
    }

    clickerSpeed.textContent = (1/(Math.abs(date1-date2)/1000)).toFixed(2);    
    
}
