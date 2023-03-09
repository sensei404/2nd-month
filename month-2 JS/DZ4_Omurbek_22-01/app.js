// Получаем элементы с помощью метода document.getElementById()
const counterElement = document.getElementById("counter");
const incrementButton = document.getElementById("increment");
const resetButton = document.getElementById("reset");
const decrementButton = document.getElementById("decrement");

// Изначальное значение счетчика равно 0
let counterValue = 0;

// Функция для обновления значения счетчика и цвета фона
function updateCounter() {
    counterElement.innerHTML = counterValue;
    if (counterValue > 0) {
        counterElement.style.color = "green";
    } else if (counterValue === 0) {
        counterElement.style.color = "gray";
    } else {
        counterElement.style.color = "red";
    }
}

// Вызываем функцию updateCounter() для установки изначального значения счетчика и цвета фона
updateCounter();

// Обработчики событий для кнопок
incrementButton.addEventListener("click", function() {
    counterValue++;
    updateCounter();
});

resetButton.addEventListener("click", function() {
    counterValue = 0;
    updateCounter();
});

decrementButton.addEventListener("click", function() {
    counterValue--;
    updateCounter();
});