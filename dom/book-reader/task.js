const book = document.getElementById('book');

const bookControls = book.querySelector('.book__controls');

const bookControlFontSize = bookControls.querySelector('.book__control_font-size');

const bookControlColor = bookControls.querySelector('.book__control_color');
const bookControlBackground = bookControls.querySelector('.book__control_background');
let addFontSize, addTextColor, addBackground;

bookControlFontSize.addEventListener('click', (e) => {
    let selectedFontSize = bookControlFontSize.querySelector('.font-size_active');
    e.preventDefault();  
    
    if (e.target.tagName !== 'A') return;

    if (selectedFontSize) {
        selectedFontSize.classList.remove('font-size_active');
        book.classList.remove(addFontSize);    
    }

    e.target.classList.add('font-size_active');

    if (e.target.dataset.size) {
        book.classList.add('book_fs-'+e.target.dataset.size);
        addFontSize = 'book_fs-'+e.target.dataset.size;
    }  
    
});

bookControlColor.addEventListener('click', (e) => {
    let selectedColor = bookControlColor.querySelector('.color_active');
    
    e.preventDefault();  
    
    if (e.target.tagName !== 'A') return;

    if (selectedColor) {
        selectedColor.classList.remove('color_active');
        book.classList.remove(addTextColor);    
    }
    
    e.target.classList.add('color_active');

    if (e.target.dataset.textColor) {
        book.classList.add('book_color-'+e.target.dataset.textColor);
        addTextColor = 'book_color-'+e.target.dataset.textColor;
    }  
    
});

bookControlBackground.addEventListener('click', (e) => {
    let selectedBackground = bookControlBackground.querySelector('.color_active');
    
    e.preventDefault();  
    
    if (e.target.tagName !== 'A') return;

    if (selectedBackground) {
        selectedBackground.classList.remove('color_active');
        book.classList.remove(addBackground);    
    }
    
    e.target.classList.add('color_active');

    if (e.target.dataset.bgColor) {
        book.classList.add('book_bg-'+e.target.dataset.bgColor);
        addBackground = 'book_bg-'+e.target.dataset.bgColor;
    }  
    
});