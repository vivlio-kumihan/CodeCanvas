let coloredBoxOne = document.querySelector(".colored-box")
let styleOne = window.getComputedStyle(coloredBoxOne)
let backgroundColorOne = styleOne.getPropertyValue('background-color')
console.log(backgroundColorOne) //=> rgb(255, 255, 255)
console.log((238).toString(16)) //=> ff

let coloredBoxTwo = document.querySelector(".colored-box.two")
let styleTwo = window.getComputedStyle(coloredBoxTwo)
let backgroundColorTwo = styleTwo.getPropertyValue('background-color')
console.log(backgroundColorTwo) //=> rgb(0, 0, 0)
console.log((255).toString(16)) //=> 0
console.log((0).toString(16)) //=> 0
console.log((0).toString(16)) //=> 0


