const btn = document.querySelector('input[type="button"]')
btn.addEventListener("click", function() {
  const info = document.querySelector("dl > .wrapper:first-of-type > dd")
  info.classList.toggle("active")
}, false)