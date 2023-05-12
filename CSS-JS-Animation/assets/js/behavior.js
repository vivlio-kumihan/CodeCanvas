const btn = document.getElementById("modal-open")
const contents = document.querySelector(".modal")
const fig = document.querySelector(".mask")
const closeBtn = document.querySelector(".modal > button")

btn.addEventListener("click", function() {
  contents.classList.add("cover")
  fig.classList.add("cover")
})

closeBtn.addEventListener("click", function() {
  contents.classList.remove("cover")
  fig.classList.remove("cover")
})




// const buttons = Array.from(document.querySelectorAll(".section"))
// const mask = getComputedStyle(document.querySelector("article", "::after"))
// console.log(mask)

// buttons.forEach(btn => {
//   btn.addEventListener("click", function() {
//     this.lastElementChild.classList.toggle("active-modal")
//     mask.classList.toggle("active-modal")
//   })  
// })
