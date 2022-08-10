const output = document.getElementById("timer");
let timerId = null;
/* основное задание */

const takeAway = () => {

    output.textContent = Number(output.textContent) - 1;

    if (output.textContent === "0") {
        clearInterval(timerId);
        alert("Вы победили в конкурсе!");
    }

}

timerId  = setInterval(takeAway, 1000);

/* дополнительные задания 1, 2 */

/*let hours = 4, minutes = 25, seconds = 19;
output.textContent = (hours < 10 ? '0' + hours: hours) + ':' + (minutes < 10 ? '0' + minutes: minutes) + ':' + (seconds < 10 ? '0' + seconds: seconds);

const takeAway = () => {

    hours = hours*60*60;
    minutes = minutes*60
    let total = (hours + minutes + seconds) - 1;
    hours = total > 0 ? Math.floor(total/3600): 0;
    minutes = total > 0 ? Math.floor(total/60)%60: 0;
    seconds = total > 0 ? total%60: 0;

    output.textContent = (hours < 10 ? '0' + hours: hours) + ':' + (minutes < 10 ? '0' + minutes: minutes) + ':' + (seconds < 10 ? '0' + seconds: seconds); 

    setTimeout(() => {
        if (total === 0) {
            clearInterval(timerId);
            alert("Вы победили в конкурсе!");
            
            window.location = 'https://github.com/TankaPV/bhj-homeworks/blob/master/js-features/countdown/README.md';
        }
    }, 500); 

}

timerId  = setInterval(takeAway, 1000);*/

