let block = document.getElementById('block')
block.style.backgroundColor = "aqua"
block.style.width = "500px"
block.style.height = "500px"
block.style.border = "solid 5px"

const posX = document.getElementById("posX")
const posY = document.getElementById("posY")

block.addEventListener('mousemove', e => {
    posX.innerHTML = event.screenX
    posY.innerHTML = event.screenY
} )