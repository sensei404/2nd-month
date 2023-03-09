// for (let i = 20; i >= 0; i--) {
//     console.log(i)
// }

// let choiceColor = prompt('Choice color (желтый, красный, зеленый)').toLowerCase().trim()
//
// let colors = {
//     red: 'красный',
//     yellow: 'желтый',
//     green: 'зеленый',
// }
//
// switch (choiceColor) {
//     case colors.red:
//         alert('STOP')
//         break
//     case colors.yellow:
//         alert('WAIT')
//         break
//     case colors.green:
//         alert('GO')
//         break
//     default:
//         alert('ERROR')
// }


// Функции - Functions

// function declaration
//
// calculate(30, 12)
//
// function calculate (a, b) {
//     return console.log(a + b)
// }
//
// calculate(12, 40)


// function expression

// calculate(13, 2)
//
// const calculate = function (a, b) {
//     return console.log(a - b)
// }
//
// calculate(30, 15)


// Arrow Function
// sayHi()

// const sayHi = () => {
//     console.log('hi')
// }
//
// sayHi()

// Lambda Function

// const sayHi = () => console.log('hi')

// Замыкания

// function init() {
//     var name = prompt('Введите имя ')
//     function displayName() {
//         console.log(name)
//     }
//     displayName()
// }
//
// init()


//
// var userAge = Number(prompt('Введите возраст: '))
//
// var age = (userAge) => {
//     if (userAge >= 18) {
//         console.log('OKAY')
//     } else if (userAge < 18) {
//         console.log('NOT OKAY')
//     } else {
//         console.log('ERROR')
//     }
// }
//
// age(userAge)

// var userAge = Number(prompt('Введите возраст: '))
//
// var ageFunc = (text) => alert(text)
//
// if (userAge >= 18) {
//     ageFunc('OKAY')
// } else {
//     ageFunc('NOT OKAY')
// }

//
// let numA = Number(prompt('Ввести 1 число'))
// let numB = Number(prompt('Ввести 2 число'))
//
// const calc = (a, b) => {
//     console.log(a + b + ' сложение')
//     console.log(a - b + ' вычитание')
//     console.log(a * b + ' умножение')
//     console.log(a / b + ' деление')
// }
//
// calc(numA, numB)

// console.log(2 * 'asd')

// const name = 'Nurdin'
// function global() {
//     const name = 'Ilya'
//     return console.log(name)
// }

// console.log(name)
// global()
// console.log(name)


// Анонимные функции

// var bob = () => {
//     console.log('bob')
// }

// var sec = 0
// setInterval(() => {
//     sec++
//     document.write(' ' + sec)
// }, 1000)

// setInterval(() => {
//     console.log('bob')
// }, 1000)

