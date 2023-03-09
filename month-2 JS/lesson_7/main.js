// ООП

// const animal = {
//     name: 'Animal',
//     age: 5,
//     hasTail: true,
//     number: 10,
//     log: function () {
//         console.log('animal')
//     }
// }

// console.log(animal.log)
// animal.log()
// console.log(animal)

// function num () {
//     return 'hi'
// }

// console.log(typeof num)

// const animal1 = new Object({
//     name: 'Animal',
//     age: 5,
//     hasTail: true,
//     eyeColor: 'any'
// })
//
// console.log(animal1)


// class Animals {
//     static type = 'ANIMAL'
//
//     constructor(options) {
//         this.name = options.name
//         this.age = options.age
//         this.hasTail = options.hasTail
//     }
//
//     voice () {
//         console.log('I am animal!')
//     }
//
// }
//
// const animal = new Animals({
//     name: 'Animal',
//     age: 3,
//     hasTail: true,
// })
//
// class Wolfs extends Animals {
//     constructor(options) {
//         super(options);
//         this.hasFang = options.hasFang
//         this.eyeColor = options.eyeColor
//     }
//
//     voice() {
//         console.log(`I am ${this.name}!`)
//     }
//
//     get ageInfo() {
//         return console.log(this.age * 6 + ' Человеческих лет')
//     }
//
// }
//
// const wolf = new Wolfs({
//     name: 'Akella',
//     age: 9,
//     hasTail: false,
//     hasFang: true,
//     eyeColor: 'red'
// })
//
// console.log(wolf)
// wolf.ageInfo
// wolf.ageInfo
// wolf.voice()
// console.log(wolf)


class Component {
    constructor(selector) {
        this.$element = document.querySelector(selector)
    }

    hide() {
        this.$element.style.display = 'none'
    }

    show() {
        this.$element.style.display = 'block'
    }
}

class Block extends Component {
    constructor(options) {
        super(options.selector);

        this.$element.style.width = this.$element.style.height = options.razmer + 'px'
        this.$element.style.background = options.cvet
    }
}

const block1 = new Block({
    selector: '#block1',
    razmer: 150,
    cvet: 'blue'
})

const block2 = new Block({
    selector: '#block2',
    razmer: 200,
    cvet: 'red'
})

class Circle extends Block {
    constructor(options) {
        super(options);
        this.$element.style.borderRadius = '50%'
    }
}

const circle = new Circle({
    selector: '.krug',
    razmer: 90,
    cvet: 'green'
})

circle.hide()
circle.show()

