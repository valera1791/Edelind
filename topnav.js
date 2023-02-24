
  const menuBtn = document.querySelector('.hr-menu-icon');
const menu = document.querySelector('.topnav');

if (menuBtn && menu) {
  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
  })
}
