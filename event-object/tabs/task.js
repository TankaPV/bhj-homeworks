const tabs = Array.from(document.getElementsByClassName('tabs'));

tabs.forEach((element) => {
    const tab = Array.from(element.querySelectorAll('div.tab'));
    const tabContent = Array.from(element.querySelectorAll('div.tab__content'));

    tab.forEach((item, idx) => {
        item.addEventListener('click',(e) => {
            const tabActive = tab.findIndex((activeElement) => activeElement.className.includes('tab_active'));
            tab[tabActive].classList.remove('tab_active');
            tabContent[tabActive].classList.remove('tab__content_active');
            item.classList.add('tab_active');        
            tabContent[idx].classList.add('tab__content_active');
            e.preventDefault();
        });
    });

});

