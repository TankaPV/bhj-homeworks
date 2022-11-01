const dropdownValue = Array.from(document.getElementsByClassName('dropdown__value'));
dropdownValue.forEach((item) => {
    item.addEventListener('click', () => {
        const dropdown = item.closest('div.dropdown');
        const dropdownList = dropdown.querySelector('ul.dropdown__list');
        dropdownList.classList.toggle('dropdown__list_active');

        const dropdownItem = Array.from(dropdownList.querySelectorAll('a.dropdown__link'));        
        dropdownItem.forEach((item1) => {
            item1.addEventListener('click', (e) => {             
                dropdownList.classList.remove('dropdown__list_active');
                item.textContent = item1.textContent;
                e.preventDefault();                
            });
        });
    });    
});

