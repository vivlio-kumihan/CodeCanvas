// HTML上にanchorを見せず、data-value属性で設定しJS上でリンクを設定する。
const dl = document.querySelectorAll(".wrapper dl")
console.log(dl)
for (let anchor of dl) {
  anchor.addEventListener("click", function() {
    let suffix = this.dataset.suffix
    switch (suffix) {
      case "mac":
        location.href = `https://www.apple.com/jp/${ suffix }`
        break;
      case "ipad":
        location.href = `https://www.apple.com/jp/${ suffix }`
        break;
      case "iphone":
        location.href = `https://www.apple.com/jp/${ suffix }`
        break;
    }
  })
}