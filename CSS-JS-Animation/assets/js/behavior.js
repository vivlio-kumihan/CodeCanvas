// const targetElems = document.querySelectorAll(".animation-target")
// 収集した要素はNodeListだったのでforEachは何も細工しなくてもいける。
// ただ、いちいちHTMLCollectionかどうか見るのも邪魔くさいので。。。どっちがスマートかな？
const targetElems = Array.from(document.querySelectorAll(".animation-target"))
const windowHight = window.innerHeight

document.addEventListener("scroll", function () {
  targetElems.forEach(elem => {
    const haflElemHight = elem.clientHeight / 2
    let setHight = windowHight - haflElemHight
    let getElemDistance = elem.getBoundingClientRect().top
    if (setHight > getElemDistance) {
      elem.classList.add("active")
    }
  })
})