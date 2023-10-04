//3 Hamburger menu
const menuTlacitko = document.querySelector('#menu-tlacitko');
const menuPolozky = document.querySelector('#menu-polozky');
const ikonaMenu = document.querySelector('.fas'); //bonus

const otevriMenu = () => {
  menuPolozky.classList.toggle('show');
  ikonaMenu.classList.toggle('fa-xmark'); //bonus
  ikonaMenu.classList.toggle('fa-bars') //bonus
};

menuTlacitko.addEventListener('click', otevriMenu);
