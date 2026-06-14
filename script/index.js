const toggle = document.querySelector("#nav-btn");
const logo = document.querySelector(".navbar-brand");
const menu = document.querySelector(".navbar-menu");
const navlink = document.querySelectorAll(".navbar-link");
const overlay = document.querySelector(".navbar-overlay");

toggle.addEventListener("click", () => {
  const isActive = !menu.classList.contains("active");
  menu.classList.toggle("active");
  toggle.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(isActive));
  toggle.textContent = isActive ? "X" : "☰";
  overlay.classList.toggle("active");
});

const closeMenu = () => {
  overlay.classList.remove("active");
  menu.classList.remove("active");
  toggle.classList.remove("open");
  toggle.setAttribute("aria-expanded", "false");
  toggle.textContent = "☰";
};

overlay.addEventListener("click", closeMenu);

navlink.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

logo.addEventListener("click", closeMenu);
