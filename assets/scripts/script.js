var closeMenu = document.querySelector(".close-menu");
var openMenu = document.querySelector(".open-menu");
var menu = document.querySelector(".menu");

openMenu.onclick = () => {
  menu.style.display = "flex";
  document.body.style.overflow = "hidden";
};

closeMenu.onclick = () => {
  menu.style.display = "none";
  document.body.style.overflow = "scroll";
};
