// // スクロール・アニメーションのサンプルコード その1
// // 要素の半分の高さがスクリーンに現れた地点で表示する。
// const targetElems = Array.from(document.querySelectorAll(".animation-target"))
// const windowHight = window.innerHeight

// document.addEventListener("scroll", function() {
//   targetElems.forEach(function(elem) {
//     const haflElemHight = elem.clientHeight / 2
//     const setHight = windowHight - haflElemHight
//     let getElemDistance = elem.getBoundingClientRect().top
//     if (setHight > getElemDistance) {
//       elem.classList.add("active")
//     }
//   })
// })

// // その1を元にして作ったもの。
// // フワッとさせるアニメーションが効かない。
// window.addEventListener("scroll", function () {
//   let animationTarget = document.querySelector("header")
//   if (-75 > animationTarget.getBoundingClientRect().top) {
//     animationTarget.classList.add("ready")
//     if (-100 > animationTarget.getBoundingClientRect().top) {
//       animationTarget.classList.remove("ready")
//       animationTarget.classList.add("apear")
//     }
//   }
//   if (-75 < animationTarget.getBoundingClientRect().top) {
//     animationTarget.classList.remove("ready")
//   }
// })

// スクロール・アニメーションのサンプルコード その2
// スクロールの量がトリガーになるアニメーション。
const targetHeader = document.querySelector("header")
const readyValue = 75
const triggerValue = 80
window.addEventListener("scroll", function () {
  // 透明にする用意
  if (readyValue < this.scrollY < triggerValue) {
    targetHeader.classList.add("ready")
    // 透明 => fix headerへ
    if (triggerValue < this.scrollY) {
      targetHeader.classList.remove("ready")
      targetHeader.classList.add("apear")
      // headerが原点に戻ったら元のスタイルに戻す仕掛け
    } else if (0 === this.scrollY) {
      targetHeader.classList.remove("ready")
      targetHeader.classList.remove("apear")
    }
  }
})

