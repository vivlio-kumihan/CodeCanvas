const header = document.querySelector("header")
scrollValue = 0
window.addEventListener("scroll", function() {
  // アップ
  if (scrollValue < this.scrollY) {
    header.classList.add("active")
    // ダウン
  } else {
    header.classList.remove("active")
  }
  scrollValue = this.scrollY
})