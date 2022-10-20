const menuMain = document.querySelectorAll('ul.menu_main');
const menuMain_1 = menuMain[0];
const menuMain_2 = menuMain[1];
const menuLink_1 = menuMain_1.querySelectorAll('a.menu__link');
const menuLink_2 = menuMain_2.querySelectorAll('a.menu__link');

const arr1 = Array.from(menuLink_1);
const arr2 = Array.from(menuLink_2);

const activ = (element, act) => {

  if (act) {
        
    element.querySelector('ul.menu.menu_sub').classList.toggle('menu_active');
    act.classList.remove('menu_active');
          
    return false;
  } 

  element.querySelector('ul.menu.menu_sub').classList.add('menu_active');
                
  return false;
    
}

arr1.forEach((item) => {

  item.onclick = () => {

    const menuItem = item.closest('li.menu__item');
    const menuActiv = menuMain_1.querySelector('ul.menu_active');
    
    if (menuItem.querySelector('ul.menu.menu_sub')) {
      
      activ(menuItem, menuActiv);
      return false;
    }

    if (menuActiv) {
      menuActiv.classList.remove('menu_active');
    }

  }
    
});

arr2.forEach((item) => {

  item.onclick = () => {

    const menuItem = item.closest('li.menu__item');
    const menuActiv = menuMain_2.querySelector('ul.menu_active');
    
    if (menuItem.querySelector('ul.menu.menu_sub')) {

      activ(menuItem, menuActiv);
      return false;
    }

    if (menuActiv) {
      menuActiv.classList.remove('menu_active');
   }   
  }
  
});

document.onclick = (e) => {
  
  if (e.target.className !== 'menu__link' & menuMain_1.querySelector('ul.menu_active') !== null) {
    menuMain_1.querySelector('ul.menu_active').classList.remove('menu_active');
  }
 
  if (e.target.className !== 'menu__link' & menuMain_2.querySelector('ul.menu_active') !== null) {
    menuMain_2.querySelector('ul.menu_active').classList.remove('menu_active');
  }

}

