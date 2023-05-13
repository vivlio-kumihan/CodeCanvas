// // ///////////////////////////////////////////////////////// sample 01
// const btn = document.getElementById("modal-open")
// const contents = document.querySelector(".modal")
// const fig = document.querySelector(".mask")
// const closeBtn = document.querySelector(".modal > button")

// btn.addEventListener("click", function() {
//   contents.classList.add("cover")
//   fig.classList.add("cover")
// })

// closeBtn.addEventListener("click", function() {
//   contents.classList.remove("cover")
//   fig.classList.remove("cover")
// })

///////////////////////////////////////////////////////// sample 02
const buttons = Array.from(document.querySelectorAll("dl"))
const closeBtns = Array.from(document.querySelectorAll(".close-btn"))
const mask = document.getElementById("modal-mask")

buttons.forEach(btn => {
  btn.addEventListener("click", function() {
    this.lastElementChild.classList.add("active-modal")
    mask.classList.add("active-modal")
  })
})

closeBtns.forEach(closeBtn => {
  closeBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    this.parentElement.classList.remove("active-modal")
    mask.classList.remove("active-modal")
  })
})