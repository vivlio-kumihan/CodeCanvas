const btn = document.querySelector("input")
btn.addEventListener("click", function() {
  const figure = this.previousElementSibling.firstElementChild
  figure.classList.toggle("pause")
})