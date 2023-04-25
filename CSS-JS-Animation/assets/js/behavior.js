// ローディング画面をクリックしたら開ける
// window.addEventListener("load", function() {
//   const loadingBg = document.getElementById("loading-bg")
//   loadingBg.addEventListener("click", function() {
//     this.classList.remove("active")
//   })
// })

// システムが何かしているのをsetTimeout関数を使って仮装する
window.addEventListener("load", function() {
  this.setTimeout(() => {
    document.getElementById("loading-bg").classList.remove("active")
  }, 8000)
})