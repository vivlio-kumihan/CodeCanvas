// hamburger menu

const menu = document.querySelector(".gnav_3")
const button = document.querySelector(".btn")
const overlay = document.querySelector(".overlay")
const body = document.body

const toggleMenu = () => {
  menu.classList.toggle("menuIsOpen")
  overlay.classList.toggle("overlayIsOpen")
  button.classList.toggle("btnIsOpen")
  body.classList.toggle("isScrollAllowed")
}

  button.addEventListener("click", () => {
  toggleMenu()
})

  overlay.addEventListener("click", () => {
  toggleMenu()
})
