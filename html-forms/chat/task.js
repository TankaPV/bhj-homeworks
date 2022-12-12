const chatWidget = document.querySelector('.chat-widget');
const chatWidgetInput = document.getElementById('chat-widget__input');
const messages = document.querySelector('.chat-widget__messages');

chatWidget.addEventListener('click', () => {
    chatWidget.classList.add('chat-widget_active'); 
});
 
document.addEventListener('click', (e) => {
    if (!e.target.className.includes('chat-widget')) {
        chatWidget.classList.remove('chat-widget_active'); 
    }
});

document.addEventListener('keydown', (e) => {
    //console.log(e.code);
    const chatWidgetInput = document.getElementById('chat-widget__input');

    if (e.code === 'Enter'|| e.code === 'NumpadEnter') {
        if (chatWidgetInput.value !== '') {
            //const messages = document.querySelector('.chat-widget__messages');
            messages.innerHTML += `
                <div class="message message_client">
                    <div class="message__time">${new Date().toLocaleTimeString('ru',{hour:'2-digit',minute:'2-digit'})}</div>
                    <div class="message__text">
                        ${chatWidgetInput.value}
                    </div>
                </div>
            `;
            chatWidgetInput.value = '';
            const timerId = setTimeout(() => {messages.innerHTML += `
            <div class="message">
                <div class="message__time">${new Date().toLocaleTimeString('ru',{hour:'2-digit',minute:'2-digit'})}</div>
                <div class="message__text">
                ${list()}
                </div>
            </div>
            `;
            clearTimeout(timerId);
            const chatWidgetMessages = document.getElementById('chat-widget__messages');
            const chatWidgetMessagesContainer = document.querySelector('.chat-widget__messages-container');
            console.log(chatWidgetMessages.scrollHeight);
            console.log(chatWidgetMessagesContainer.clientHeight);
            if (chatWidgetMessages.scrollHeight > chatWidgetMessagesContainer.clientHeight) {
                console.log('true');
                chatWidgetMessages.scrollIntoView(false);
            }}, 1000);
            
            //console.log(chatWidgetInput.value);
        }
    }
});

// const timerIdInterval = setInterval(() => {
//     chatWidgetInput.addEventListener('focus', (e) => {
//         console.log(e.target.value);
//         if (e.target.value === '') {messages.innerHTML +=`
//             <div class="message">
//                 <div class="message__time">${new Date().toLocaleTimeString('ru',{hour:'2-digit',minute:'2-digit'})}</div>
//                 <div class="message__text">
//                 Вы, заснули?
//                 </div>
//             </div>
//             `;
//         }
//         clearInterval(timerIdInterval);
//     });
// },3000);


function list() {
    const list = [
        'Добрый день! До свидания!',
        'Мы ничего не будем вам продавать!',
        'Где ваша совесть?',
        'Кто тут?',
        'К сожалению все операторы сейчас заняты. Не пишите нам больше!',
        'Вы не купили ни одного товара, чтобы так с нами разговаривать!',
    ]
    const index = Math.floor(Math.random() * list.length);
    return list[index];
}




