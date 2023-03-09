class TrafficLight
{
    constructor(selector)
    {
        this.$element = document.getElementById(selector)
    }
}

class Circle extends TrafficLight
{
    constructor(options)
    {
        super(options.selector)
        this.$element.style.backgroundColor = options.color
    }
}

let color = prompt('Введите цвет светофора: ').toLowerCase();
if (color === 'red') {
    const red = new Circle({
        selector: 'red',
        color: 'red',
    })
}
else if (color === 'yellow') {
    const yellow = new Circle({
        selector: 'yellow',
        color: 'yellow',
    })
}
else if (color === 'green') {
    const green = new Circle({
        selector: 'green',
        color: 'green',
    })
}
else alert('Вы должны ввести цвет светофора: красный, желтый или зеленный')