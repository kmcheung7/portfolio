//alert ('Welcome');

const menu = document.querySelector('#mobile_menu');
const menuitems = document.querySelector('.nav');

// Display Mobile Menu
 const mobileMenu = () => {
      menu.classList.toggle('is-active');
      menuitems.classList.toggle('active');
 };

 menu.addEventListener('click', mobileMenu);


// Show active menu when scrolling
const highlightMenu = () => {
  const elem = document.querySelector('.highlight');

  const storyMenu = document.querySelector('#story-page');
  const productMenu = document.querySelector('#products-page');
  const recipeMenu = document.querySelector('#recipes-page');
  let scrollPos = window.scrollY;
  // console.log(scrollPos);

  // adds 'highlight' class to my menu items
  if (window.innerWidth > 600 && scrollPos < 400) {
    storyMenu.classList.remove('highlight');
    recipeMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 600 && scrollPos < 880) {
    productMenu.classList.add('highlight');
    recipeMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 600 && scrollPos < 2000) {
    recipeMenu.classList.add('highlight');
    storyMenu.classList.remove('highlight');
    return;
  }

  if ((elem && window.innerWIdth < 600 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight');
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);


 //  Close mobile Menu when clicking on a menu item
  const hideMobileMenu = () => {
      const menuBars = document.querySelector('.is-active');
      if (window.innerWidth <= 600 && menuBars) {
          menu.classList.toggle('is-active');
          menuitems.classList.remove('active');
      }
  };

  menuitems.addEventListener('click', hideMobileMenu);



