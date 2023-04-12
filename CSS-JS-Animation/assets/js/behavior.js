const openMenu = document.getElementById("open-menu")
 openMenu.addEventListener("click", function() {
  this.lastElementChild.classList.toggle("active")
})

// menuあたりをマウスがホバーしたらのアクション
// const menuList = document.getElementById("menuList")
// menuList.addEventListener("mouseenter", function() {
//   this.classList.add("active")
// })
// menuList.addEventListener("mouseleave", function() {
//   this.classList.remove("active")
// })