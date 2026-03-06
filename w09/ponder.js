const sidenav = document.getElementById("sidenav")
const menuBtn = document.getElementById("menu-btn")
const closeBtn = document.getElementById("close-btn")

menuBtn.addEventListener("click", () => {
  sidenav.classList.add("open")
})

closeBtn.addEventListener("click", () => {
  sidenav.classList.remove("open")
})