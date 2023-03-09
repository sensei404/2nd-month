// console.log('HI')

// DOM

// console.log(document);

// window.alert('Hello')

// console.log(window)

// document.body.style.backgroundColor = 'red'

// document.body.setAttribute('class', 'wrapper')

// const block = document.getElementsByClassName('block')
// block[0].style.backgroundColor = 'green'
// console.log(block[0])


// const blockClass = document.querySelector('.block')
// const blockId = document.querySelector('#block')

// console.log(blockClass)
// console.log(blockId)

// const button = document.querySelector('#btn')
//
// button.addEventListener('click', (event) => {
//     // alert('Ты нажал на кнопку!')
//     // console.log(event)
// })

// const posX = document.getElementById('posX')
// const posY = document.getElementById('posY')
//
// window.addEventListener('mousemove', event => {
//     posX.innerHTML = event.screenX
//     posY.innerHTML = event.screenY
// })

// // console.dir(buttons[0])
//  const buttons = document.querySelectorAll('.button')
//
// for (button of buttons) button.onclick = e => document.body.style.backgroundColor = e.target.innerText
//
//  for (let button of buttons) {
//     button.addEventListener('click', e => {
//         document.body.style.backgroundColor = e.target.innerText
//      })
// }
//
// const buttons = document.querySelectorAll('.button')
//
// for (let button of buttons) {
//     button.addEventListener('click', e => {
//         document.body.style.backgroundColor = e.target.innerText
//     })
// }

// Методы массивов

// filter()

// const fruits = ['apple', 'pineapple', 'peach', 'grape', 'qwertyu']
//
// console.log(fruits)
//
// const result = fruits.filter(fruit => fruit.length > 5)
//
// console.log(result)

// map()

// const numbers = [1, 2, 3, 5, 8, 13, 21]
//
// console.log(numbers)
//
// const result = numbers.map(item => {
//     return item * 2
// })
//
// console.log(result)


// forEach()

// const numbers = [2, 34, 56, 89, 'dfg', 19, false]
//
// let count = 0
//
// numbers.forEach(element => {
//     console.log(element)
//     count++
// })
//
// console.log(`Количество элементов в массиве ${count}`)
//
// let shoppingList = ['milk', 'bread', 'eggs', 'coffee'];
// shoppingList.forEach(function(item) {
//     console.log("Don't forget to buy " + item + ".");

// slice()

// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']
//
// console.log(animals)
//
// let slicedAnimal = animals.slice(-1)
//
//
// console.log(slicedAnimal);