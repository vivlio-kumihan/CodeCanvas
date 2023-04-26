setTimeout(function() {
  location.href = "#one"
}, 2000)

const anchorToSection = Array.from(document.getElementById("anchor-to-section").children)
anchorToSection.forEach(function(elem) {
  elem.addEventListener("click", function(e) {
    switch(e.target.className) {
      case "one":
        location.href = "#one"
        break;
      case "two":
        location.href = "#two"
        break;
      case "three":
        location.href = "#three"
        break;
      case "four":
        location.href = "#four"
            break;
      case "five":
        location.href = "#five"
        break;
    }
  })
})
