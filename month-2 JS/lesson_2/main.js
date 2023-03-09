// var lang = prompt('Выберите язык')
//
// var langArr = {
//     russian: ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
//     english: ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'],
//     ru: 'ru',
//     en: 'en'
// }
//
// if (lang === langArr.ru) {
//     console.log(langArr.russian)
// } else if (lang === langArr.en) {
//     console.log(langArr.english)
// } else {
//     alert('ERROR')
// }
//
// switch (lang) {
//     case langArr.ru:
//         console.log(langArr.russian)
//         break
//     case langArr.en:
//         console.log(langArr.english)
//         break
//     default:
//         alert('ERROR')
//         break
// }

// var user = {
//     pass: '12345',
//     name: 'Nurdin',
//     age: 19
// }

// конкатенация строк
// console.log('Пароль: ' + user.pass)
// console.log('Имя: ' + user.name)
// console.log('Возраст: ' + user.age)


// Переопределение переменных

// var num1 = 12
// num1 = 42

// let num2 = 10
// num2 = 100

// const numberStr = '42'

// Циклы

// 1. while

 //let count = 0

// while (count <= 10) {
//      console.log(count = count + 1)
//      console.log(count++)
//}

// 2. for
// let arr = [1, 2, 3, 4, 5, 6]
//  console.log(arr)
//  console.log(arr[2])
//
//  for (let item = 0; item < arr.length; item++) {
//      console.log(arr[item])
//  }
// //
// let arr = []
// arr.push(1, 2)
// console.log(arr)
//
// for (let i = 0; i < 100; i++) {
//     console.log(i)
// }

// 4. for of

// Цикл for of не работает с пустыми массивами

// var arr = [1, 2, 3, 4, 5, 6, 7]
// console.log(arr)
//
// for (let item of arr) {
//     console.log(Math.pow(item, 2))
// }
//
//  for (let i of arr) {
//      if (i === Number(i) ) {
//          console.log(i)
//      }
//  }

// 5. for in

// let obj = {
//     string: 'some str',
//     number: 42,
//     'key': false,
//     [null]: {
//         name: 'Nurdin'
//     },
//     sayHi() {
//         console.log('HI')
//     }
// }

// console.log(obj["sayHi"])

// obj.sayHi()
// console.log(obj.sayHi())

// интерполяция строк
// '' "" ``
// for (let key in obj) {
//     console.log(`Ключ: ${key}, Значение: ${obj[key]}`)
// }

// for in чаще всего применяется к объектам (object)

// let arr = ['a', 'b', 'c', 'd']
// console.log(arr)

// метод push() добавит элемент в конец массива
// arr.push('e')
// console.log(arr)

// метод unshift() добавит элемент в начало массива
 //arr.unshift('e')
 //console.log(arr)

// метод pop() удалит элемент с конца массива
// arr.pop('d')
// console.log(arr)

// метод shift() удалит элемент сначала массива
// arr.shift()
// console.log(arr)

