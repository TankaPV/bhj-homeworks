const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');

xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();
xhr.addEventListener('readystatechange',() => {
    if (xhr.readyState === 4) {
        const respText = JSON.parse(xhr.responseText);
        pollTitle.textContent = respText.data.title;
        
        const arr = respText.data.answers;
        for (let item of arr) {
            pollAnswers.insertAdjacentHTML('beforeend', `<button class="poll__answer">
        ${item}</button>`);
        }
        pollAnswers.addEventListener('click', (e) => {
            Array.from(pollAnswers.getElementsByClassName('poll__answer')).forEach((item, idx) => {
                if (e.target === item) {
                    alert('Спасибо, ваш голос засчитан!');
                    xhr1 = new XMLHttpRequest();
                    xhr1.open('POST', 'https://students.netoservices.ru/nestjs-backend/poll');
                    xhr1.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                    xhr1.send(`vote=${respText.id}&answer=${idx}`);
                    xhr1.addEventListener('readystatechange',() => {
                        if (xhr1.readyState === xhr1.DONE) {
                            Array.from(pollAnswers.getElementsByClassName('poll__answer')).forEach((item) => item.remove());
                            const respText1 = JSON.parse(xhr1.responseText);
                            const arr1 = respText1.stat;
                            for (let item of arr1) {
                                pollAnswers.insertAdjacentHTML('beforeend', `<div class="poll__answer">
                                ${item.answer}: <b>${item.votes}%</b></div>`);
                            }    
                        }
                    });
                }
            });    
        });
    }
});

