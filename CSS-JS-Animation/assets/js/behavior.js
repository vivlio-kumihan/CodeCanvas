document.getElementById("form").onsubmit = function (event) {
  event.preventDefault()
  let outPutText = document.querySelector("#out-put-text")
  if (event.submitter.id === "btn-one") {
    outPutText.textContent = "Pushed Button ONE!"
  } else if (event.submitter.id === "btn-two") {
    outPutText.textContent = "Pushed Button TWO!"
  } else {
    outPutText.textContent = "Pushed Button THREE!"
  }
}