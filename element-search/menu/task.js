const menuMain = Array.from(document.querySelectorAll('ul.menu_main'));

//console.log(menuMain);

const activ = (element, act) => {

  if (act) {
        
    element.querySelector('ul.menu.menu_sub').classList.toggle('menu_active');
    act.classList.remove('menu_active');
          
    return false;
  } 

  element.querySelector('ul.menu.menu_sub').classList.add('menu_active');
                
  return false;
    
}

menuMain.forEach((item) => {
  
  //console.log(item);

  const menuLink = Array.from(item.querySelectorAll('a.menu__link'));

  //console.log(menuLink);

  menuLink.forEach((item1) => {

    //console.log(item1);

    item1.onclick = () => {

      const menuItem = item1.closest('li.menu__item');
      
      const menuActiv = item.querySelector('ul.menu_active');

      //console.log(menuActiv);
      
      if (menuItem.querySelector('ul.menu.menu_sub')) {
        
        activ(menuItem, menuActiv);
        return false;
      }
  
      if (menuActiv) {
        menuActiv.classList.remove('menu_active');
      }
  
    }

  });
    
});

document.onclick = (e) => {
 
  if (e.target.className !== 'menu__link') {
    menuMain.forEach((item) => {
      if (item.querySelector('ul.menu_active') !== null) {
        item.querySelector('ul.menu_active').classList.remove('menu_active');
      }
    });
  }

}

