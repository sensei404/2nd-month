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
