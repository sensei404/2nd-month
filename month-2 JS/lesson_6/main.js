// console.log('Hello')

// ES5

// a = 19
// console.log(num)
// var num = 10


// ES6

// let l = 10
// l = 'num'
// console.log(l)

// const c = 0

// if (true) {
//     let a = 12
//     console.log(a)
// }


// hoisting

// b = 10

// function hoisted() {
//     age = 20
// }
//
// hoisted()
// let age
// console.log(age)

// const COLOR = '#fff'
// COLOR = '#000'

// const arr = ['#fff', '#000']
// console.log(arr)
// arr[1] = '#222'
// arr.push('#e1e1e1')
// console.log(arr)

// const num = 5
// const num2 = num + 15
//
// console.log(num)
// console.log(num2)

// str num null NaN bool undefined - primitive
// obj arr - obj ссылочные

// const obj = {
//     name: 'Nurdin',
//     age: 19
// }
//
// const obj2 = { ...obj }
//
// obj2.name = 'John'
//
// console.log(obj)
// console.log(obj2)

// console.log(obj)
// obj.name = 'Smit'
// console.log(obj)


// function sum(a = '', b ) {
//     return console.log(a + b)
// }
//
// sum('hello')

// let num = (a = 0, b) => console.log(a + b)
// num(12, 30)

// Context

// console.log(window);


const arrow = () => console.log(this)

function log() {
    console.log(this)
}


const person = {
    name: 'Nurdin',
    age: 19,
    log: log,
    arrow: arrow,
    delayLog: function () {
        const self = this
        setTimeout( function () {
            console.log(`name: ${self.name}, age: ${self.age}`)
        }, 0)
    }
}
person.delayLog()
// person.log()
