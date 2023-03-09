const buttons = document.querySelectorAll('.button')

for (let button of buttons) {
    button.addEventListener('click', e => {
        document.body.style.backgroundColor = e.target.innerText
    })
}

const menubar = prompt('введите напиток который вы хотите попить')

switch (menubar) {
    case 'чай':
        alert('"чай" - "Чай способствует улучшению усвояемости организмом витамина С"')
        break
    case 'кофе':
        alert('"кофе" - кофе хорошо помагает успеваемости и вас не будеть тянуть к сону')
        break
    case 'кола':
        alert('"кола" - "Чрезмерное употребление сахара вредит вашему здоровью"')
        break
    case 'молоко':
        alert('"молоко" - помагает к укреплению зуб и у вас будет хорошая настроение если добавите сахар')
        break
    case 'энергетик':
        alert('"энергетик" - этот напиток больше всего пьют программисты, если пить чрезмерно в многих количествах ходчт мифы что человек умрет')
        break
    default:
        alert('введите напиток если не будете вводить название то не получите инсайт')
        break
}


let audio = new Audio()
audio.preload = 'auto'
audio.src = 'patron.mp3'

console.dir(audio)

const play = () => {
    audio.play()
}

const stop = () => {
    audio.pause()
}
