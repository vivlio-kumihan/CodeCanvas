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

// 【やりたい事】
// 一つの領域に複数のボタンがあり、それぞれにモーダルウィンドウを実装させたい。
// モーダルウィンドウを開くことはできたが、閉じることが出来ない。根本的に作り方に問題があるのか？

///////////////////////////////////////////////////////// sample 02
const buttons = Array.from(document.querySelectorAll("dl"))
const mask = document.getElementById("modal-mask")
const closeBtn = document.querySelector(".close-btn")

// dl要素を全て収集して、特定のdlへのクリックをトリガーにして任意の要素に対してクラスを付与する作戦。
// これは理解。
buttons.forEach(btn => {
  btn.addEventListener("click", function() {
    this.lastElementChild.classList.add("active-modal")
    mask.classList.add("active-modal")
  })
})

// ここから質問です。
// 想定した挙動にならないです。
// モーダルウィンドウが開いている状態で、モーダルウィンドウ上にあるボタンをクリックすることで、
// 任意の要素に対してクラスを解除する作戦。上手くいかないです。

// モーダルウィンドウ上にあるボタンをクリックする。
closeBtn.addEventListener("click", function (e) {
  // 親要素を捕まえたい。
  console.log(e.target.parentElement) // => <dd class="active-modal">　掴めてる。
  // 親要素のクラスを確認する。
  console.log(e.target.parentElement.classList) //=> DOMTokenList [ "active-modal" ] 確認できた。

  // ///////////////////////////////////////////////////////
  // クラスの削除を実行する。
  e.target.parentElement.classList.remove("active-modal")
  // ///////////////////////////////////////////////////////

  // クラスの削除を確認する。
  console.log(e.target.parentElement) //=> <dd class=""> コンソール上では確認できた。でもHTMLに反映されない。
  
  // 以下も同様。
  console.log(mask) //=> <figure id="modal-mask" class="active-modal">　そこに居ることを確認できた。

  // ///////////////////////////////////////////////////////
  mask.classList.remove("active-modal")
  // ///////////////////////////////////////////////////////

  console.log(mask) //=> <figure id="modal-mask" class=""> コンソール上では確認できた。でもHTMLに反映されない。。
})
