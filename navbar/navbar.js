const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav");

menu.addeventlistner("click", () => {
  menu.classList.toggle("icon");
  nav.classList.toggle("change");
});
