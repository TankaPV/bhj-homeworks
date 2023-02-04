const loader = document.getElementById('loader');
const items = document.getElementById('items');

function appendElement(element) {
    loader.classList.remove('loader_active');
    const valutes = Object.values(element.response.Valute);
    for (let item of valutes) {
        items.insertAdjacentHTML('beforeEnd', `<div class="item">
        <div class="item__code">
            ${item.CharCode}
        </div>
        <div class="item__value">
        ${item.Value}
        </div>
        <div class="item__currency">
        ${item.Name}
        </div>
        </div>`);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const loaded = localStorage.getItem('loaded');
    if (loaded) {
        appendElement(JSON.parse(loaded));
    } else {
        let xhr = new XMLHttpRequest();
        console.log(xhr);
        let url = 'https://students.netoservices.ru/nestjs-backend/slow-get-courses';
        xhr.open('GET', url);
        xhr.send();
        xhr.addEventListener('readystatechange', () => {
            if (xhr.readyState === 4) {
                loader.classList.remove('loader_active');
                appendElement(JSON.parse(xhr.responseText));
                localStorage.setItem('loaded',xhr.responseText);
            }
        });
    }        
});