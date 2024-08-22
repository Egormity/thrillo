const sideNavItemEl = document.querySelectorAll('.side-nav__item');

sideNavItemEl.forEach(element => {
  element.addEventListener('click', () => {
    sideNavItemEl.forEach(el => {
      el.classList.remove('side-nav__item--active');
    });
    element.classList.add('side-nav__item--active');
  });
});
