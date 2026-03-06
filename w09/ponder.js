const menuBtn = document.getElementById("menu-btn");
const sidenav = document.getElementById("sidenav");
const closeBtn = document.getElementById("close-btn");
const overlay = document.getElementById("overlay");

function openMenu() {
  sidenav.classList.add("open");
  overlay.classList.add("show");
}

function closeMenu() {
  sidenav.classList.remove("open");
  overlay.classList.remove("show");
}

menuBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);