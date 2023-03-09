const button = document.querySelector('#button')
const input = document.querySelector('#input')
const wordsBlock = document.querySelector('.wordsBlock')

let wordsArr = []

const revers = () => {
    if (input.value.trim() === ""){
        return false
    }else {
        wordsBlock.innerHTML = ""
        wordsArr.push(`${input.value}-${input.value.split('').reverse().join()}`)
        wordsArr.forEach(word => {
            const p = document.createElement('p')
            p.innerText = word
            wordsBlock.prepend(p)
        })
        input.value = ""
    }
}

button.onclick = ()=> revers()

document.addEventListener('keydown', e =>{
    if (e.keyCode === 13) revers()
})