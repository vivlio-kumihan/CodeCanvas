// スクリーンの下辺から500pxの距離に要素の上辺が触れたら表示する。

// const targetElems = Array.from(document.querySelectorAll(".animation-target"))
// const setWindowHight = window.innerHeight - 500

// document.addEventListener("scroll", function() {
//   targetElems.forEach(function(elem, idx) {
//     // ブラウザの上辺から要素の上辺までの距離
//     // console.log(elem.getBoundingClientRect())
//     let getElemDistance = elem.getBoundingClientRect().top
//     if (setWindowHight > getElemDistance) {
//       elem.classList.add("active")
//     }
//   })
// })


// 要素の半分の高さがスクリーンに現れた地点で表示する。
// ただし、縦に長すぎる要素の場合は効果が効いていないような場合もある。
// ケースバーケースで敷設方法を考える。

const targetElems = Array.from(document.querySelectorAll(".animation-target"))
const windowHight = window.innerHeight

document.addEventListener("scroll", function() {
  targetElems.forEach(function(elem) {
    const haflElemHight = elem.clientHeight / 2
    let setHight = windowHight - haflElemHight
    let getElemDistance = elem.getBoundingClientRect().top
    if (setHight > getElemDistance) {
      elem.classList.add("active")
    }
  })
})
targetElems.forEach(function(elem) {

})



const setWindowHight = window.innerHeight - 500

// document.addEventListener("scroll", function() {
//   targetElems.forEach(function(elem, idx) {
//     // ブラウザの上辺から要素の上辺までの距離
//     // console.log(elem.getBoundingClientRect())
//     let getElemDistance = elem.getBoundingClientRect().top
//     if (setWindowHight > getElemDistance) {
//       elem.classList.add("active")
//     }
//   })
// })



