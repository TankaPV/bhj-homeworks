const menuLink = document.querySelectorAll('a.menu__link');

const arr = Array.from(menuLink);

arr.forEach((item,idx,arr) => {

    item.onclick = () => {
      const menuItem = item.closest('li.menu__item');
      const menuActiv = document.querySelector('ul.menu.menu_sub.menu_active');
      const menuActiv_2 = document.querySelector('ul.menu.menu_sub__2.menu_active');

      if (menuItem.querySelector('ul.menu.menu_sub')) {

        if (menuActiv) {
          
          menuItem.querySelector('ul.menu.menu_sub').classList.toggle('menu_active');
          menuActiv.classList.remove('menu_active');
          
          return false;
        } 

        menuItem.querySelector('ul.menu.menu_sub').classList.add('menu_active');
                   
        return false;

      } 

      if (menuItem.querySelector('ul.menu.menu_sub__2')) {

        if (menuActiv_2) {
          
          menuItem.querySelector('ul.menu.menu_sub__2').classList.toggle('menu_active');
          menuActiv_2.classList.remove('menu_active');
          
          return false;
        } 

        menuItem.querySelector('ul.menu.menu_sub__2').classList.add('menu_active');
                   
        return false;

      } 

      if (menuActiv) {
         menuActiv.classList.remove('menu_active');
      }  

      if (menuActiv_2) {
        menuActiv_2.classList.remove('menu_active');
     }  
  
    }
    
});

document.onclick = (e) => {
  
  if (e.target.className !== 'menu__link' & document.querySelector('ul.menu.menu_sub.menu_active') !== null) {
    document.querySelector('ul.menu.menu_sub.menu_active').classList.remove('menu_active');
  }

  if (e.target.className !== 'menu__link' & document.querySelector('ul.menu.menu_sub__2.menu_active') !== null) {
    document.querySelector('ul.menu.menu_sub__2.menu_active').classList.remove('menu_active');
  }

}

