const chatWidget = document.querySelector('.chat-widget');
const chatWidgetInput = document.getElementById('chat-widget__input');
const messages = document.querySelector('.chat-widget__messages');

let timerIdInterval;
// let timerIdInterval = setInterval(() => {
    
//     messages.innerHTML +=`
//         <div class="message">
//             <div class="message__time">${new Date().toLocaleTimeString('ru',{hour:'2-digit',minute:'2-digit'})}</div>
//             <div class="message__text">
//             Вы, заснули?
//             </div>
//         </div>
//         `;
// },10000);

chatWidget.addEventListener('click', () => {
    chatWidget.classList.add('chat-widget_active'); 
});
 
document.addEventListener('click', (e) => {
    if (!e.target.className.includes('chat-widget')) {
        chatWidget.classList.remove('chat-widget_active'); 
    }
});


chatWidgetInput.addEventListener('input', () => {
    clearInterval(timerIdInterval);
    document.addEventListener('keydown', (e) => {
        //console.log(e.code);
        const chatWidgetInput = document.getElementById('chat-widget__input');
        const chatWidgetMessages = document.getElementById('chat-widget__messages');
        const chatWidgetMessagesContainer = document.querySelector('.chat-widget__messages-container');
    
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
                        console.log(chatWidgetMessages.scrollHeight);
                        console.log(chatWidgetMessagesContainer.clientHeight);
                        if (chatWidgetMessages.scrollHeight > chatWidgetMessagesContainer.clientHeight) {
                            console.log('true');
                            chatWidgetMessages.scrollIntoView(false);
                        }
                    }, 1000);

                timerIdInterval = setInterval(() => {
    
                    messages.innerHTML +=`
                        <div class="message">
                            <div class="message__time">${new Date().toLocaleTimeString('ru',{hour:'2-digit',minute:'2-digit'})}</div>
                            <div class="message__text">
                            Вы, заснули?
                            </div>
                        </div>
                        `;
                    if (chatWidgetMessages.scrollHeight > chatWidgetMessagesContainer.clientHeight) {
                        chatWidgetMessages.scrollIntoView(false); 
                    }   
                },30000);    
                
                //console.log(chatWidgetInput.value);
            }
        }
    });
});    

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




