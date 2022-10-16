const menuLink = document.querySelectorAll('a.menu__link');

//console.log(document.querySelectorAll('ul.menu.menu_sub'));

const arr = Array.from(menuLink);


arr.forEach((item) => {

    item.onclick = () => {
        const menuItem = item.closest('li.menu__item');
        const menuActiv = document.querySelector('ul.menu.menu_sub.menu_active');

        if (menuItem.querySelector('ul.menu.menu_sub')) {

          if (menuActiv) {
            
            menuItem.querySelector('ul.menu.menu_sub').classList.toggle('menu_active');
            menuActiv.classList.remove('menu_active');
            
            return false;
          } 

          menuItem.querySelector('ul.menu.menu_sub').classList.add('menu_active');
                     
          return false;

        } 

      menuActiv.classList.remove('menu_active');
    }
    
});

document.onclick = (e) => {
  
  if (e.target.className !== 'menu__link' & document.querySelector('ul.menu.menu_sub.menu_active') !== null) {
    document.querySelector('ul.menu.menu_sub.menu_active').classList.remove('menu_active');
  }
}

