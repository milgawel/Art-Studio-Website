const navButton = document.querySelector(".navigation__button");
const navMenu = document.querySelector(".navigation-menu");
const win = window;

function openMenu(event) {
  navButton.classList.toggle("active");
  navMenu.classList.toggle("active");

  event.preventDefault();
  event.stopImmediatePropagation();
}

function closeMenu(event) {
  if (navButton.classList.contains("active")) {
    navButton.classList.remove("active");
    navMenu.classList.remove("active");
  }
}
navButton.addEventListener("click", openMenu, false);

win.addEventListener("click", closeMenu, false);
